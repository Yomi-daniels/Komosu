// app/content/layout.jsx
// import ContentSidebar from "@/components/ContentSidebar";
import ContentSidebar from "./ContentSidebar";
export default function ContentLayout({ children }) {
  return (
    <div className="flex">
      <ContentSidebar />
      <div
        className="lg:ml-[32rem] p-8 w-full h-[100%] mt-36 max-w-[831px] relative overflow-hidden
     sm:ml-[15rem]   
     max-sm:ml-[1.7rem]
     max-sm:px-0
     max-sm:w-[600px]
    max-sm:mt-[17rem]
           md:ml-[17rem]
      "
      >
        {children}
      </div>
    </div>
  );
}
