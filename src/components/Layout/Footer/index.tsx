export default function Footer() {
  return (
    <footer className="bg-lazz p-4 md:p-20 grid md:grid-cols-3 border-t">
      <div className="flex gap-10">
        <div className="flex flex-col gap-8 font-nunito-sans ">
          <div>
            <h3 className="text-xl font-bold uppercase text-nowrap">Inquiries can be sent to:</h3>
            <p>xxx@email.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase">Address:</h3>
            <p>Street Name</p>
            <p>00000, City</p>
            <p>Country</p>
          </div>
        </div>
      </div>
      <CopyRight />
      <div className="flex flex-col md:items-end">
        <div>LOGO</div>
      </div>
    </footer>
  );
}

function CopyRight(): JSX.Element {
  return (
    <div className="py-1 mt-12 w-full flex flex-col mb-10 md:mb-0 justify-center md:items-center text-primary-blue">
      <p>&copy; 2024 Thea Oland</p>
      <p>org.nr.0000.000.0000</p>
    </div>
  );
}
