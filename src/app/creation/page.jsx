import Creations from "@/components/Creations";

async function fetchCreations() {
  const res = await fetch("http://localhost:4000/creation");
  const data = await res.json();
  return data;
}

async function CreationPage() {
  const creations = await fetchCreations();
  return (
    <>
        <Creations creations={creations} />;
    </>
  );
}

export default CreationPage;
