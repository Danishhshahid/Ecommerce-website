import SlugPage from "./slugPage"


const Productdetail = ({ params }: { params: Promise<{ slug: string }> } ) => {
  
  return (
    <div className='w-full h-full py-6'>
     <SlugPage params = {params}/>
    </div>
  )
}

export default Productdetail
