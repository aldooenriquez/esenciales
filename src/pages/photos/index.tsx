export default function Photos({ photos }: any) {
  return (
    <div>
      {photos?.map((photo: any, index: number) => (
        <img
          src={photo.url}
          alt={photo.title}
          key={`user-photo-${photo.title}-${index}`}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();

    return {
      props: {
        photos: data.slice(10),
      },
    };
  } catch (error) {}
}
