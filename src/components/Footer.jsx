export default function Footer({ className }) {
  return (
    <>
      <footer className={className}>
        <p className="place-self-center">
          made by a human. © nobody,{" "}
          <span className="text-accent">just be kind.</span>
        </p>
      </footer>
    </>
  );
}
