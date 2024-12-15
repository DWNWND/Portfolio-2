export default function Footer() {
  return (
    <footer className="bg-lazz flex justify-center py-10 border-t">
      <CopyRight />
    </footer>
  );
}

function CopyRight(): JSX.Element {
  return (
    <div className="text-primary-blue">
      <p>&copy; 2024 Thea</p>
    </div>
  );
}
