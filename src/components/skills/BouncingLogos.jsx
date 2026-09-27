import { useEffect, useRef, useState } from "react";

const LOGO_SIZE = 40; // must match the rendered image size (w-10 h-10 = 40px)
const MIN_GAP = 12;
const MAX_ATTEMPTS = 50;

function getNonOverlappingPositions(count, width, height) {
  const placed = [];
  const minDist = LOGO_SIZE + MIN_GAP;

  for (let i = 0; i < count; i++) {
    let best = null;
    let bestMinDist = -Infinity;

    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      const candidate = {
        x: Math.random() * Math.max(width - LOGO_SIZE, 1),
        y: Math.random() * Math.max(height - LOGO_SIZE, 1),
      };

      // distance to closest already-placed logo
      let closest = Infinity;
      for (const p of placed) {
        const dx = candidate.x - p.x;
        const dy = candidate.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < closest) closest = dist;
      }
      if (placed.length === 0) closest = Infinity;

      // good enough, use it right away
      if (closest >= minDist) {
        best = candidate;
        break;
      }

      // otherwise keep the least-overlapping candidate as fallback
      if (closest > bestMinDist) {
        bestMinDist = closest;
        best = candidate;
      }
    }

    placed.push(best);
  }

  return placed;
}

function BouncingLogos({ items }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const positionsRef = useRef([]);
  const dimensionsRef = useRef({
    width: 0,
    height: 0,
  });
  const dragRef = useRef(null);

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const speed = 0.5;

    const updateDimensions = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      dimensionsRef.current = { width, height };

      positionsRef.current = positionsRef.current.map((item) => ({
        ...item,
        x: Math.max(0, Math.min(item.x, width - LOGO_SIZE)),
        y: Math.max(0, Math.min(item.y, height - LOGO_SIZE)),
      }));

      setPositions([...positionsRef.current]);
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    updateDimensions();

    const spawnPositions = getNonOverlappingPositions(
      items.length,
      Math.max(dimensionsRef.current.width, 1),
      Math.max(dimensionsRef.current.height, 1)
    );

    positionsRef.current = items.map((_, index) => ({
      x: spawnPositions[index].x,
      y: spawnPositions[index].y,
      vx: (Math.random() > 0.5 ? 1 : -1) * speed,
      vy: (Math.random() > 0.5 ? 1 : -1) * speed,
      paused: false,
    }));

    setPositions([...positionsRef.current]);

    const animate = () => {
      const { width, height } = dimensionsRef.current;

      positionsRef.current = positionsRef.current.map((item, index) => {
        if (item.paused || dragRef.current?.index === index) {
          return item;
        }

        let { x, y, vx, vy } = item;

        x += vx;
        y += vy;

        if (x <= 0 || x >= width - LOGO_SIZE) {
          vx *= -1;
          x = Math.max(0, Math.min(x, width - LOGO_SIZE));
        }

        if (y <= 0 || y >= height - LOGO_SIZE) {
          vy *= -1;
          y = Math.max(0, Math.min(y, height - LOGO_SIZE));
        }

        return { ...item, x, y, vx, vy };
      });

      setPositions([...positionsRef.current]);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, [items]);

  const handlePointerDown = (event, index) => {
    const rect = containerRef.current.getBoundingClientRect();
    const item = positionsRef.current[index];

    dragRef.current = {
      index,
      offsetX: event.clientX - rect.left - item.x,
      offsetY: event.clientY - rect.top - item.y,
    };

    positionsRef.current[index].paused = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPositions([...positionsRef.current]);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const index = dragRef.current.index;

    let x = event.clientX - rect.left - dragRef.current.offsetX;
    let y = event.clientY - rect.top - dragRef.current.offsetY;

    x = Math.max(0, Math.min(x, rect.width - LOGO_SIZE));
    y = Math.max(0, Math.min(y, rect.height - LOGO_SIZE));

    positionsRef.current[index].x = x;
    positionsRef.current[index].y = y;

    setPositions([...positionsRef.current]);
  };

  const handlePointerUp = () => {
    if (!dragRef.current) return;

    const index = dragRef.current.index;
    positionsRef.current[index].paused = false;
    dragRef.current = null;

    setPositions([...positionsRef.current]);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {items.map((item, index) => {
        const position = positions[index];
        if (!position) return null;

        const isDragging = dragRef.current?.index === index;

        return (
          <div
            key={item.name}
            className="absolute"
            style={{ left: position.x, top: position.y }}
          >
            {isDragging && (
              <div className="absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap bg-neutral-900 text-white text-xs px-2 py-1 rounded">
                {item.name}
              </div>
            )}

            <img
              src={item.logo}
              alt={item.name}
              title={item.name}
              draggable={false}
              className={`w-10 h-10 object-contain select-none ${
                isDragging ? "cursor-grabbing scale-125" : "cursor-grab"
              }`}
              onPointerDown={(event) => handlePointerDown(event, index)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BouncingLogos;