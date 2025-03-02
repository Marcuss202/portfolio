import "./CSS/BioBox.css"

function BioBox() {

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            const emailSvg = document.querySelector('.emailBioSvg');
            const checkSvg = document.querySelector('.emailBioCheck');

            if (emailSvg && checkSvg) {
                emailSvg.classList.remove('visible');
                emailSvg.classList.add('notVisible');
                checkSvg.classList.remove('notVisible');
                checkSvg.classList.add('visible');

                setTimeout(() => {
                    checkSvg.classList.remove('visible');
                    checkSvg.classList.add('notVisible');
                    emailSvg.classList.remove('notVisible');
                    emailSvg.classList.add('visible');
                }, 2000);
            }
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    }

    return (
        <>  
            <div className="BioBox">
                <div className="wrapper pl-2">
                    <div className="ContentBox m-3">
                        <div className="row d-flex"> 
                            <h3 className="col-lg col-12 d-flex">Markuss Ozols</h3>
                            <div className="locationWrapper d-flex align-items-top gap-1 d-flex d-lg-none">
                                <svg className="" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#acacac" stroke="#acacac" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#acacac" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                                <p className="location">Valmiera, Latvia</p>
                            </div>
                            
                            <div className="col contactWrapper d-flex justify-content-start justify-content-lg-end gap-2 py-1 py-lg-0">
                                <div onClick={() => copyToClipboard("markussozols25@gmail.com")} className="emailWrapper order-2 order-lg-1 mt-2 mt-lg-0 d-flex">
                                    <p className=" emailBio d-flex align-items-top align-items-xl-center">markussozols25@gmail.com</p>
                                    <svg className="emailBioSvg visible" width="15px" height="15px" viewBox="0 0 16 16" fill="#ACACAC" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M0 0H10V4H4V10H0V0Z" fill="#ACACAC"></path>
                                        <path d="M16 6H6V16H16V6Z" fill="#ACACAC"></path>
                                    </g>
                                    </svg>
                                    <svg className="emailBioCheck notVisible" width="15px" height="15px" viewBox="0 0 16 16" fill="#ACACAC" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.4141 4.91424L5.99991 14.3285L0.585693 8.91424L3.41412 6.08582L5.99991 8.6716L12.5857 2.08582L15.4141 4.91424Z" fill="#ACACAC"></path> </g></svg>
                                
                                </div>
                                <div className=" d-flex gap-1 order-1 order-lg-2">
                                    <div className="github contacts d-flex justify-content-center align-items-center">
                                        <a href="https://github.com/Marcuss202/" target="_blank"><svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                                        </a>
                                    </div>
                                    <div className="linkedIn contacts d-flex justify-content-center align-items-center">
                                        <a href="https://www.linkedin.com/in/ozols-markuss/" target="_blank"><svg fill="#ffffff" height="25px" width="25px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-1v-2c0-0.8-0.7-1.5-1.5-1.5S18,17.7,18,18.5v2v1V25c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.3,0,0.5,0.1,0.7,0.3c0.6-0.2,1.2-0.3,1.8-0.3c3,0,5.5,2.5,5.5,5.5V25z"></path> </g></svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="locationWrapper d-flex align-items-top gap-1 d-none d-lg-flex">
                            <svg className="" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="15px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#acacac" stroke="#acacac" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#acacac" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
                            <p className="location">Valmiera, Latvia</p>
                        </div>
                        
                        <p className="description">I am a 18 year old Full-stack Web Developer & Game Developer. I have been programming for 5+ years</p>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default BioBox

