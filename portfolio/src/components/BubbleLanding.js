import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './BubbleLanding.css';

const BubbleLanding = () => {
  const navigate = useNavigate();
  const [poppingBubbles, setPoppingBubbles] = useState(false);
  const [selectedBubble, setSelectedBubble] = useState(null);
  const bubbleRefs = useRef([]);
  const animationFrameRef = useRef();
  
  const bubbles = [
    { 
      id: 1, 
      text: 'About', 
      path: '/My-Portfolio/about', 
      dx: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1), 
      dy: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1)
    },
    { 
      id: 2, 
      text: 'Projects', 
      path: '/My-Portfolio/projects', 
      dx: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1), 
      dy: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1)
    },
    { 
      id: 3, 
      text: 'Career', 
      path: '/My-Portfolio/experience', 
      dx: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1), 
      dy: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1)
    },
    { 
      id: 4, 
      text: 'Contact', 
      path: '/My-Portfolio/contact', 
      dx: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1), 
      dy: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1)
    },
    { 
        id: 5, 
        text: 'Skills', 
        path: '/My-Portfolio/skills', 
        dx: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1), 
        dy: Math.random() * 3 + 1 * (Math.random() < 0.5 ? -1 : 1)
    },
  ];

  useEffect(() => {
    // Initialize random positions
    bubbleRefs.current.forEach(bubble => {
      if (bubble) {
        bubble.style.left = `${Math.random() * (window.innerWidth - 150)}px`;
        bubble.style.top = `${Math.random() * (window.innerHeight - 150)}px`;
      }
    });

    const checkBubbleCollision = (index1, index2) => {
      const bubble1 = bubbleRefs.current[index1];
      const bubble2 = bubbleRefs.current[index2];
      
      if (!bubble1 || !bubble2) return false;

      const rect1 = bubble1.getBoundingClientRect();
      const rect2 = bubble2.getBoundingClientRect();

      const center1 = {
        x: rect1.left + rect1.width / 2,
        y: rect1.top + rect1.height / 2
      };
      const center2 = {
        x: rect2.left + rect2.width / 2,
        y: rect2.top + rect2.height / 2
      };

      const distance = Math.sqrt(
        Math.pow(center2.x - center1.x, 2) + 
        Math.pow(center2.y - center1.y, 2)
      );

      const minDistance = (rect1.width + rect2.width) / 2;

      if (distance < minDistance) {
        const angle = Math.atan2(center2.y - center1.y, center2.x - center1.x);
        return {
          colliding: true,
          angle,
          overlap: minDistance - distance
        };
      }

      return { colliding: false };
    };

    const handleBubbleCollision = (index1, index2, collisionInfo) => {
      const { angle } = collisionInfo;
      const bubble1 = bubbles[index1];
      const bubble2 = bubbles[index2];

      // Get the velocities before collision
      const velocity1 = Math.sqrt(bubble1.dx * bubble1.dx + bubble1.dy * bubble1.dy);
      const velocity2 = Math.sqrt(bubble2.dx * bubble2.dx + bubble2.dy * bubble2.dy);

      // Get the angles of the velocities
      const angle1 = Math.atan2(bubble1.dy, bubble1.dx);
      const angle2 = Math.atan2(bubble2.dy, bubble2.dx);

      // Calculate new velocities
      const newAngle1 = 2 * angle - angle1;
      const newAngle2 = 2 * angle - angle2;

      // Set new velocities
      bubble1.dx = velocity1 * Math.cos(newAngle1);
      bubble1.dy = velocity1 * Math.sin(newAngle1);
      bubble2.dx = velocity2 * Math.cos(newAngle2);
      bubble2.dy = velocity2 * Math.sin(newAngle2);

      // Add some randomness to prevent sticking
      const randomFactor = 0.2;
      bubble1.dx += (Math.random() - 0.5) * randomFactor;
      bubble1.dy += (Math.random() - 0.5) * randomFactor;
      bubble2.dx += (Math.random() - 0.5) * randomFactor;
      bubble2.dy += (Math.random() - 0.5) * randomFactor;

      // Separate the bubbles to prevent overlap
      const bubble1El = bubbleRefs.current[index1];
      const bubble2El = bubbleRefs.current[index2];
      if (bubble1El && bubble2El) {
        const rect1 = bubble1El.getBoundingClientRect();
        const pushDistance = collisionInfo.overlap / 2;
        const pushX = Math.cos(angle) * pushDistance;
        const pushY = Math.sin(angle) * pushDistance;

        const x1 = parseFloat(bubble1El.style.left) - pushX;
        const y1 = parseFloat(bubble1El.style.top) - pushY;
        const x2 = parseFloat(bubble2El.style.left) + pushX;
        const y2 = parseFloat(bubble2El.style.top) + pushY;

        bubble1El.style.left = `${x1}px`;
        bubble1El.style.top = `${y1}px`;
        bubble2El.style.left = `${x2}px`;
        bubble2El.style.top = `${y2}px`;
      }
    };

    const animate = () => {
      bubbleRefs.current.forEach((bubble, index) => {
        if (bubble && !poppingBubbles) {
          const rect = bubble.getBoundingClientRect();
          let x = parseFloat(bubble.style.left);
          let y = parseFloat(bubble.style.top);
          
          // Check for collisions with window boundaries
          if (rect.right >= window.innerWidth) {
            bubbles[index].dx = -Math.abs(bubbles[index].dx) * (0.8 + Math.random() * 0.4);
            bubbles[index].dy += (Math.random() - 0.5) * 2;
            x = window.innerWidth - rect.width;
          } else if (rect.left <= 0) {
            bubbles[index].dx = Math.abs(bubbles[index].dx) * (0.8 + Math.random() * 0.4);
            bubbles[index].dy += (Math.random() - 0.5) * 2;
            x = 0;
          }

          if (rect.bottom >= window.innerHeight) {
            bubbles[index].dy = -Math.abs(bubbles[index].dy) * (0.8 + Math.random() * 0.4);
            bubbles[index].dx += (Math.random() - 0.5) * 2;
            y = window.innerHeight - rect.height;
          } else if (rect.top <= 0) {
            bubbles[index].dy = Math.abs(bubbles[index].dy) * (0.8 + Math.random() * 0.4);
            bubbles[index].dx += (Math.random() - 0.5) * 2;
            y = 0;
          }

          // Check for collisions with other bubbles
          bubbleRefs.current.forEach((otherBubble, otherIndex) => {
            if (index !== otherIndex) {
              const collisionInfo = checkBubbleCollision(index, otherIndex);
              if (collisionInfo.colliding) {
                handleBubbleCollision(index, otherIndex, collisionInfo);
              }
            }
          });

          // Normalize speed
          const speed = Math.sqrt(bubbles[index].dx * bubbles[index].dx + bubbles[index].dy * bubbles[index].dy);
          if (speed > 5) {
            bubbles[index].dx = (bubbles[index].dx / speed) * 5;
            bubbles[index].dy = (bubbles[index].dy / speed) * 5;
          } else if (speed < 2) {
            bubbles[index].dx = (bubbles[index].dx / speed) * 2;
            bubbles[index].dy = (bubbles[index].dy / speed) * 2;
          }

          // Update positions
          x += bubbles[index].dx;
          y += bubbles[index].dy;

          bubble.style.left = `${x}px`;
          bubble.style.top = `${y}px`;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [poppingBubbles]);

  const handleBubbleClick = (bubble) => {
    if (poppingBubbles) return;
    setPoppingBubbles(true);
    setSelectedBubble(bubble);
    
    setTimeout(() => {
      navigate(bubble.path);
    }, 1500);
  };

  return (
    <div className="bubble-container">
      <div className="welcome-text">
        <div className="welcome-text-top">Welcome to the homepage of</div>
        <div className="welcome-text-bottom">MENASH FAREED</div>
        <div>{`[BETA]`}</div>
      </div>
      {bubbles.map((bubble, index) => (
        <div
          key={bubble.id}
          ref={el => bubbleRefs.current[index] = el}
          className={`bubble ${poppingBubbles && selectedBubble?.id !== bubble.id ? 'pop' : ''} 
                     ${selectedBubble?.id === bubble.id ? 'selected' : ''}`}
          onClick={() => handleBubbleClick(bubble)}
        >
          <span className="bubble-text">{bubble.text}</span>
        </div>
      ))}
    </div>
  );
};

export default BubbleLanding; 