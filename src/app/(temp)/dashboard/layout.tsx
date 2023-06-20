export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  setting: React.ReactNode;
}) {
  return (
    <>
      <>ijijij</>
      {props.children}
      {props.setting}
      {props.analytics}
    </>
  );
}
