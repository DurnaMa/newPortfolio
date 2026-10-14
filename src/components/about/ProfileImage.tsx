function ProfileImage() {
  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0 lg:w-5/12 lg:max-w-none shrink-0 lg:sticky lg:top-24">
      <img
        src="/profilbild/mahirDurna-large.jpg"
        srcSet="/profilbild/mahirDurna-medium.jpg 800w, /profilbild/mahirDurna-large.jpg 1200w, /profilbild/mahirDurna.jpg 2000w"
        sizes="(min-width: 1024px) 480px, (min-width: 512px) 512px, 100vw"
        alt="Mahir Durna"
        className="w-full aspect-[7/6] object-cover object-[65%_center] rounded-lg border-2 border-dress-blues grayscale hover:grayscale-0 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
      />
    </div>
  );
}

export default ProfileImage;
