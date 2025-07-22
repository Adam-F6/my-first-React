import Icons from './Icons'

export default function Footer() {
  return (
    <>

<div className=" w-100 FOOTER d-flex flex-sm-row flex-column p-5">

<div className=" text-center col-sm-4 my-5 text-white"><h3 className=" H3-Footer">LOCATION</h3>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
</div>

<div className=" text-center col-sm-4 my-5 text-white"><h3 className=" H3-Footer">AROUND THE WEB</h3>

<Icons/>

</div>

<div className=" text-center col-sm-4 my-5 text-white"><h3 className=" H3-Footer">ABOUT FREELANCER</h3>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>

</div>


    <div className=' d-flex h-40 w-100 text-white bg-dark'>
<div className=" m-auto"><h6>Copyright © Your Website 2021</h6>

</div>
    </div>
    </>
  )
}
