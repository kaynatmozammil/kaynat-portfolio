import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const GallerySection = () => {
  const [mediaList, setMediaList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);

  const correctPassword = import.meta.env.VITE_GALLERY_PASSWORD;

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("galleryAccess") || "{}");
      const now = Date.now();

      if (stored.granted && stored.expiresAt > now) {
        setAuthorized(true);
        setTimeLeft(Math.floor((stored.expiresAt - now) / 1000));
      }
    } catch {
      localStorage.removeItem("galleryAccess");
    }
  }, []);

  useEffect(() => {
    if (!authorized || timeLeft === null) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setAuthorized(false);
          localStorage.removeItem("galleryAccess");
          clearInterval(interval);
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [authorized, timeLeft]);

  useEffect(() => {
    if (!authorized) return;

    const supportedImages = [".jpg", ".JPG", ".jpeg", ".png", ".webp", ".gif"];
    const supportedVideos = [".mp4", ".webm"];
    const totalItems = 100;
    const mediaPromises = [];

    for (let i = totalItems; i >= 1; i--) {
      const index = i;
      [...supportedImages, ...supportedVideos].forEach((ext) => {
        const url = `/images/gallery${index}${ext}`;
        const isVideo = supportedVideos.includes(ext);

        mediaPromises.push(
          new Promise((resolve) => {
            if (!isVideo) {
              const img = new Image();
              img.src = url;
              img.onload = () => resolve({ url, type: "image", order: index });
              img.onerror = () => resolve(null);
            } else {
              const video = document.createElement("video");
              video.src = url;
              video.onloadeddata = () => resolve({ url, type: "video", order: index });
              video.onerror = () => resolve(null);
            }
          })
        );
      });
    }

    Promise.all(mediaPromises).then((results) => {
      const ordered = results.filter(Boolean).sort((a, b) => b.order - a.order);
      setMediaList(ordered);
      setLoading(false);
    });
  }, [authorized]);

  const handleSeeMore = () => setVisibleCount((prev) => prev + 6);
  const handleShowLess = () => setVisibleCount(6);
  const handleRequestAccess = () => setShowPasswordInput(true);

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
      localStorage.setItem("galleryAccess", JSON.stringify({ granted: true, expiresAt }));
      setAuthorized(true);
      setTimeLeft(300);
      setError("");
    } else {
      setError("❌ Incorrect password. Try again.");
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <section id="gallery" className="scroll-mt-28 my-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
        My <span className="text-primary">Gallery</span>
      </h2>

      {!authorized ? (
        <div className="text-center mt-6 space-y-4">
          {!showPasswordInput ? (
            <button
              onClick={handleRequestAccess}
              className="px-6 py-2 cursor-pointer rounded-full bg-primary text-white hover:bg-primary/90 transition duration-300"
            >
              🔓 Click here to show my gallery
            </button>
          ) : (
            <div className="space-y-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="px-4 py-2 border rounded-md w-64"
              />
              <div>
                <button
                  onClick={handlePasswordSubmit}
                  className="px-6 py-2 cursor-pointer rounded-full bg-primary text-white hover:bg-primary/90 transition duration-300"
                >
                  Submit
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          )}
        </div>
      ) : (
        <>
          {timeLeft !== null && (
            <p className="text-sm text-center text-gray-500 mb-4">
              ⏳ Access expires in <strong>{formatTime(timeLeft)}</strong>
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(loading ? Array(6).fill({}) : mediaList.slice(0, visibleCount)).map(
              (item, index) =>
                loading ? (
                  <div
                    key={index}
                    className="w-full h-64 bg-gray-200 animate-pulse rounded-lg"
                  />
                ) : item.type === "image" ? (
                  <img
                    key={index}
                    src={item.url}
                    alt={`Gallery ${index + 1}`}
                    className="rounded-lg shadow-md object-cover w-full h-64 transition-opacity duration-700 opacity-0"
                    onLoad={(e) => (e.target.style.opacity = 1)}
                  />
                ) : (
                  <video
                    key={index}
                    src={item.url}
                    controls
                    muted
                    className="rounded-lg shadow-md object-cover w-full h-64 transition-opacity duration-700 opacity-0"
                    onLoadedData={(e) => (e.target.style.opacity = 1)}
                  />
                )
            )}
          </div>

          {!loading && (
            <div className="text-center mt-8 space-x-4">
              {visibleCount < mediaList.length && (
                <button
                  onClick={handleSeeMore}
                  className="inline-flex items-center gap-2 px-6 py-2 cursor-pointer rounded-full border border-primary text-primary hover:bg-primary/10 transition duration-300"
                >
                  <ChevronDown className="w-5 h-5" />
                  See More
                </button>
              )}
              {visibleCount > 6 && (
                <button
                  onClick={handleShowLess}
                  className="inline-flex items-center gap-2 px-6 py-2 cursor-pointer rounded-full border border-red-500 text-red-500 hover:bg-red-100 transition duration-300"
                >
                  <ChevronUp className="w-5 h-5" />
                  Show Less
                </button>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
};
