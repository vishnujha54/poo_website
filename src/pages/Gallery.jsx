import React from 'react';

export default function Gallery() {
  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item"> <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400" alt="Makeup 1" /><span>Bridal Look</span></div>
        <div className="gallery-item"> <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400" alt="Makeup 2" /><span>Party Glam</span></div>
        <div className="gallery-item"> <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400" alt="Makeup 3" /><span>Editorial</span></div>
        <div className="gallery-item"> <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400" alt="Makeup 4" /><span>Natural Beauty</span></div>
      </div>
    </div>
  );
}
