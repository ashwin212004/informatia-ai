export default function ComponentPage() {
  return (
    <>
      {/* <main className="h-screen bg-green-200">Page1</main> */}

      <div className="container mx-auto flex justify-between h-full py-[200px]">
        {/* <div className="text-[30px] font-sans text-[#7ED957] h-[300px] sticky top-[300px]">
          Cards Vertical Sticky scroll
        </div> */}

        <div className="flex flex-col gap-[100px] font-sans sticky">
          <div className="bg-red-200 w-[400px] h-[300px] sticky top-[300px]">div 1</div>
          <div className="bg-green-200 w-[400px] h-[300px] sticky top-[300px]">div 2</div>
          <div className="bg-yellow-200 w-[400px] h-[300px] sticky top-[300px]">div 3</div>
          <div className="bg-pink-200 w-[400px] h-[300px] sticky top-[300px]">div 4</div>
        </div>
      </div>

      {/* <main className="h-screen bg-red-200">Page3</main> */}
    </>
  );
}