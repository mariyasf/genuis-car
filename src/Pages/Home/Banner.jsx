import b1 from '/assets/images/banner/1.jpg'
import b2 from '/assets/images/banner/2.jpg'
import b3 from '/assets/images/banner/3.jpg'
import b4 from '/assets/images/banner/4.jpg'
import b5 from '/assets/images/banner/5.jpg'
import b6 from '/assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[650px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={b1} className="w-full rounded-lg" />
                <div className="absolute  gap-5
                top-0 bottom-0 bg-gradient-to-r flex items-center from-[#151515] to[rgb(21, 21, 21,0)] ">
                    <div className='text-white space-y-5 pl-10 lg:pl-36'>
                        <h2 className='text-6xl font-bold w-1/3'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl w-[522px]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <button className='btn border-none  bg-[#FF3811] hover:bg-[#b02003] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent text-white  '>Latest Project</button>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-transparent">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-transparent">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={b2} className="w-full rounded-lg" />
                <div className="absolute  gap-5
                top-0 bottom-0 bg-gradient-to-r flex items-center from-[#151515] to[rgb(21, 21, 21,0)] ">
                    <div className='text-white space-y-5 pl-10 lg:pl-36'>
                        <h2 className='text-6xl font-bold w-1/3'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl w-[522px]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <button className='btn border-none  bg-[#FF3811] hover:bg-[#b02003] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent text-white  '>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle text-white bg-[#FF3811] hover:bg-transparent">❮</a>
                    <a href="#slide3" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-transparent">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={b3} className="w-full rounded-lg" />
                <div className="absolute  gap-5
                top-0 bottom-0 bg-gradient-to-r flex items-center from-[#151515] to[rgb(21, 21, 21,0)] ">
                    <div className='text-white space-y-5 pl-10 lg:pl-36'>
                        <h2 className='text-6xl font-bold w-1/3'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl w-[522px]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <button className='btn border-none  bg-[#FF3811] hover:bg-[#b02003] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent text-white  '>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-transparent">❮</a>
                    <a href="#slide4" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-transparent">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={b4} className="w-full rounded-lg" />
                <div className="absolute  gap-5
                top-0 bottom-0 bg-gradient-to-r flex items-center from-[#151515] to[rgb(21, 21, 21,0)] ">
                    <div className='text-white space-y-5 pl-10 lg:pl-36'>
                        <h2 className='text-6xl font-bold w-1/3'>Affordable Price For Car Servicing</h2>
                        <p className='text-xl w-[522px]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <button className='btn border-none  bg-[#FF3811] hover:bg-[#b02003] text-white mr-5'>Discover More</button>
                        <button className='btn bg-transparent text-white  '>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-transparent">❮</a>
                    <a href="#slide1" className="btn btn-circle  text-white bg-[#FF3811] hover:bg-transparent">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;