import React, { useState } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400',
    alt: 'Bridal Look',
    category: 'Bridal',
    caption: 'Bridal Look',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400',
    alt: 'Party Glam',
    category: 'Party',
    caption: 'Party Glam',
  },
  {
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400',
    alt: 'Editorial',
    category: 'Editorial',
    caption: 'Editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400',
    alt: 'Natural Beauty',
    category: 'Natural',
    caption: 'Natural Beauty',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400',
    alt: 'Classic Elegance',
    category: 'Bridal',
    caption: 'Classic Elegance',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400',
    alt: 'Modern Chic',
    category: 'Editorial',
    caption: 'Modern Chic',
  },
  {
    src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&h=400',
    alt: 'Glamorous Night',
    category: 'Party',
    caption: 'Glamorous Night',
  },
  {
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400',
    alt: 'Soft Glow',
    category: 'Natural',
    caption: 'Soft Glow',
  },
];

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalImg, setModalImg] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page" id="gallery">
      <h2>My Work Gallery</h2>
      <p className="gallery-intro">A showcase of my favorite looks, from radiant brides to bold editorial styles. Every face is a new canvas!</p>
      <div className="gallery-categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="gallery-grid awesome-gallery">
        {filteredImages.map((img, idx) => (
          <div className="gallery-item" key={idx} onClick={() => setModalImg(img)}>
            <img src={img.src} alt={img.alt} />
            <span>{img.caption}</span>
          </div>
        ))}
      </div>
      {modalImg && (
        <div className="gallery-modal" onClick={() => setModalImg(null)}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <img src={modalImg.src} alt={modalImg.alt} />
            <div className="gallery-modal-caption">{modalImg.caption}</div>
            <button className="gallery-modal-close" onClick={() => setModalImg(null)}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}
