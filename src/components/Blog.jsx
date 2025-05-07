import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ITEducationalTourBlog = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const tourLocations = {
    1: [
      {
        name: "Rizal Park",
        emoji: "🏞️",
        description: "A historical urban park in the heart of Manila, known for its significant role in Philippine history.",
        imageUrl: "/images/DAY1A.jpg", // Corrected relative path
      },
      {
        name: "Intramuros",
        emoji: "🏰",
        description: "The historic walled city of Manila, showcasing Spanish colonial architecture.",
        imageUrl: "/images/DAY1B.jpg",
      },
      {
        name: "Mall of Asia (MOA)",
        emoji: "🛍️",
        description: "One of the largest shopping malls in the world, offering a wide array of retail, dining, and entertainment options.",
        imageUrl: "/images/DAY1C.JPG",
      },
    ],
    2: [
      {
        name: "Subic Bay Freeport Zone",
        emoji: "⚓",
        description: "A former US Naval Base.",
        imageUrl: "/images/DAY2A.jpg",
      },
      {
        name: "SM North",
        emoji: "🛍️",
        description: "A large shopping mall.",
        imageUrl: "/images/DAY2B.jpg",
      },
    ],
    3: [
      {
        name: "National Museum of Natural History",
        emoji: "🦖",
        description: "A museum showcasing the natural history of the Philippines.",
        imageUrl: "/images/DAY3A.jpg",
      },
      {
        name: "Quezon Memorial Circle",
        emoji: "⭕",
        description: "A national park and shrine.",
        imageUrl: "/images/DAY3B.jpg",
      },
      {
        name: "Museo ng Pampangulong Sasakyan (Presidential Car Museum)",
        emoji: "🚗",
        description: "A museum showcasing the vehicles used by former Philippine presidents.",
        imageUrl: "/images/DAY3C.JPG",
      },
    ],
    4: [
      {
        name: "Bangko Sentral ng Pilipinas (Central Bank)",
        emoji: "🏦",
        description: "The central bank of the Philippines.",
        imageUrl: "/images/DAY4A.jpg",
      },
      {
        name: "Hytech Technology Center",
        emoji: "🔬",
        description: "A technology center.",
        imageUrl: "/images/DAY4B.JPG",
      },
      {
        name: "Bonifacio Global City (BGC)",
        emoji: "🏙️",
        description: "A modern commercial and residential area.",
        imageUrl: "/images/DAY4C.JPG",
      },
    ],
    5: [
      {
        name: "LRT Line 2 Operations Center",
        emoji: "🚆",
        description: "The operations center for the LRT Line 2.",
        imageUrl: "/images/DAY5A.jpg",
      },
      {
        name: "Metropolitan Manila Development Authority (MMDA)",
        emoji: "🚦",
        description: "The governing body of Metro Manila.",
        imageUrl: "/images/DAY5B.jpg",
      },
      {
        name: "Ayala Malls TriNoma",
        emoji: "🛍️",
        description: "A shopping mall.",
        imageUrl: "/images/DAY5C.jpg",
      },
    ],
    6: [
      {
        name: "Baguio Strawberry Farm",
        emoji: "🍓",
        description: "A farm where strawberries are grown at Baguio.",
        imageUrl: "/images/DAY6A.jpg",
      },
      {
        name: "Philippine Military Academy (PMA)",
        emoji: "🎖️",
        description: "The military academy of the Philippines.",
        imageUrl: "/images/DAY6B.jpg",
      },
      {
        name: "Mines View Park",
        emoji: "🏞️",
        description: "A park with scenic views.",
        imageUrl: "/images/DAY6C.jpg",
      },
    ],
    7: [
      {
        name: "Final Hours of Baguio exploration",
        emoji: "🚶‍♂️",
        description: "Final Hours of Exploring Baguio before going back home.",
        imageUrl: "/images/DAY7A.JPG",
      },
      {
        name: "Going Home",
        emoji: "🏠",
        description: "Represents the end of the tour and the journey back home.",
        imageUrl: "/images/DAY7B.jpg",
      },
    ],
  };

  const days = [1, 2, 3, 4, 5, 6, 7];

  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#000000',
      }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '3rem',
          textAlign: 'center',
          color: '#0369CF',
        }}
      >
        IT Educational Tour Blog
      </motion.h2>

      {/* Day Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {days.map((day) => (
          <motion.button
            key={day}
            onClick={() => setActiveDay(day)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (day - 1) * 0.1, duration: 0.5 }}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backgroundColor: activeDay === day
                ? 'rgba(3, 105, 207, 0.2)'
                : 'rgba(255, 255, 255, 0.05)',
              border: activeDay === day
                ? '1px solid #0369CF'
                : '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <span>{['☀️', '🌤️', '⛅', '🌧️', '🌦️', '🌈', '🌇'][day - 1]}</span>
            Day {day}
          </motion.button>
        ))}
      </div>

      {/* Location Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem',
      }}>
        {tourLocations[activeDay]?.map((location, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              style={{
                backgroundColor: '#000000',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onClick={() => setSelectedLocation(location)} // Open modal on click
              whileHover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 40px rgba(3, 105, 207, 0.3)',
              }}
            >
              <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>{location.emoji}</span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '0.5rem',
              }}>
                {location.name}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                margin: 0,
              }}>
                {location.description}
              </p>
            </motion.div>
          </React.Fragment>
        ))}
        {tourLocations[activeDay]?.length === 0 && (
          <div style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            gridColumn: '1 / -1',
          }}>
            No locations for Day {activeDay}.
          </div>
        )}
      </div>

      {/* Modal Implementation */}
      {selectedLocation && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
          onClick={() => setSelectedLocation(null)} // Close modal on outside click
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#000000',
              borderRadius: '12px',
              padding: '2rem',
              maxWidth: '80%',
              maxHeight: '80%',
              overflowY: 'auto',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <button
              onClick={() => setSelectedLocation(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.5rem',
                border: 'none',
                background: 'none',
              }}
            >
              &times;
            </button>
            <h2 style={{ fontSize: '2rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>
              {selectedLocation.name}
            </h2>
            <img
              src={selectedLocation.imageUrl}
              alt={selectedLocation.name}
              style={{
                borderRadius: '8px',
                maxWidth: '100%',
                maxHeight: '300px',
                objectFit: 'contain',
                marginBottom: '1rem',
              }}
            />
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
              {selectedLocation.description}
            </p>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default ITEducationalTourBlog;
