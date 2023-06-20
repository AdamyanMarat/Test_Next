export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <>Header</>
      {props.children}
    </>
  );
}
