type FeaturedInput = {
  value: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
};

export function InputFeatured({ value }: FeaturedInput) {
  return (
    <>
      <input
        id="thumbnail-src"
        name="thumbnail-src"
        value={value.src}
        className="hidden"
        readOnly
      />
      <input
        id="thumbnail-alt"
        name="thumbnail-alt"
        value={value.alt}
        className="hidden"
        readOnly
      />
      <input
        id="thumbnail-width"
        name="thumbnail-width"
        value={value.width}
        className="hidden"
        readOnly
      />
      <input
        id="thumbnail-height"
        name="thumbnail-height"
        value={value.height}
        className="hidden"
        readOnly
      />
    </>
  );
}
