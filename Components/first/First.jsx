import React, { useState } from 'react'

const First = () => {
    // const [showFullUpdate, setShowFullUpdate] = useState(false);
    const [showComments, setShowComments] = useState(false);

   
    const toggleComments = () => {
        setShowComments(!showComments);
    };


    const comments = [
        'Comment 1',
        'Comment 2',
        'Comment 3',
    ];
    const data = [
        {
            id: 1,
            img: '/cardimg1.avif',
            imgbelow: '/card2.avif',
            title: 'Investigation of red kite poisoning has identified a suspect',
            user: 'user1.avif',
            username: 'Adriana Brossmannova',
            userdata: 'Conservation Biologist @ Mossy Earth',
            desc: `Wildlife poisoning is classified as a crime in Spain, but continues to be the leading cause of death of Red kites in this country. Thanks to the great effort of our on-the-ground partner AMUS and Spanish authorities, the 1,5 year investigation of the poisoning of a Red kite released as part of the LIFE Eurokite project is coming to an end.
            The Red kite was GPS tagged and released in the spring of 2021 after having recovered at the AMUS wildlife from an injury. As such, it became part of the 500 Red kites that have been equipped with a GPS in Europe in the last 2 years. In Spain the species is classified as Endangered and 100 juvenile nestlings are being tagged and released during the project, an activity supported by Mossy Earth. With the increasing availability of GPS devices for species tagging, this method is becoming increasingly important in understanding the behaviour and threats to different species to design effective conservation strategies.
            
            After the release, the Red kite migrated to the south of France where it spent the summer, returning back to Spain with the beginning of the autumn migration to an area south of the release site. It was in this area in Extremadura where it was detected dead in late 2021 thanks to the GPS device. The GPS device played an essential role in quickly identifying the death of the bird and localizing the body, collecting important evidence at the scene and starting a police investigation.
            
            The necropsy carried out at the AMUS wildlife hospital confirmed poisoning as the cause of death and identified two toxins aldicarb and oxamil, both toxic pesticides, the former a toxin banned in the EU. The identification of these toxins in the body of the bird later led to the identification of an agricultural facility with possession of these substances and also the suspect.
            
            We applaud the excellent work of AMUS and all the authorities that were involved in the investigation process and we hope that this successful investigation will act as a deterrent to future wildlife poisonings.
            
            Check the most recent field report for more red kite updates, including some tagged birds travelling between continents and an eagle owl causing havoc.`,

        },
        {
            id: 1,
            img: '/cardimg1.avif',
            imgbelow: '/card2.avif',
            title: 'Investigation of red kite poisoning has identified a suspect',
            user: 'user1.avif',
            username: 'Adriana Brossmannova',
            userdata: 'Conservation Biologist @ Mossy Earth',
            desc: `Wildlife poisoning is classified as a crime in Spain, but continues to be the leading cause of death of Red kites in this country. Thanks to the great effort of our on-the-ground partner AMUS and Spanish authorities, the 1,5 year investigation of the poisoning of a Red kite released as part of the LIFE Eurokite project is coming to an end.
            The Red kite was GPS tagged and released in the spring of 2021 after having recovered at the AMUS wildlife from an injury. As such, it became part of the 500 Red kites that have been equipped with a GPS in Europe in the last 2 years. In Spain the species is classified as Endangered and 100 juvenile nestlings are being tagged and released during the project, an activity supported by Mossy Earth. With the increasing availability of GPS devices for species tagging, this method is becoming increasingly important in understanding the behaviour and threats to different species to design effective conservation strategies.
            
            After the release, the Red kite migrated to the south of France where it spent the summer, returning back to Spain with the beginning of the autumn migration to an area south of the release site. It was in this area in Extremadura where it was detected dead in late 2021 thanks to the GPS device. The GPS device played an essential role in quickly identifying the death of the bird and localizing the body, collecting important evidence at the scene and starting a police investigation.
            
            The necropsy carried out at the AMUS wildlife hospital confirmed poisoning as the cause of death and identified two toxins aldicarb and oxamil, both toxic pesticides, the former a toxin banned in the EU. The identification of these toxins in the body of the bird later led to the identification of an agricultural facility with possession of these substances and also the suspect.
            
            We applaud the excellent work of AMUS and all the authorities that were involved in the investigation process and we hope that this successful investigation will act as a deterrent to future wildlife poisonings.
            
            Check the most recent field report for more red kite updates, including some tagged birds travelling between continents and an eagle owl causing havoc.`,

        },
        {
            id: 1,
            img: '/cardimg1.avif',
            imgbelow: '/card2.avif',
            title: 'Investigation of red kite poisoning has identified a suspect',
            user: 'user1.avif',
            username: 'Adriana Brossmannova',
            userdata: 'Conservation Biologist @ Mossy Earth',
            desc: `Wildlife poisoning is classified as a crime in Spain, but continues to be the leading cause of death of Red kites in this country. Thanks to the great effort of our on-the-ground partner AMUS and Spanish authorities, the 1,5 year investigation of the poisoning of a Red kite released as part of the LIFE Eurokite project is coming to an end.
            The Red kite was GPS tagged and released in the spring of 2021 after having recovered at the AMUS wildlife from an injury. As such, it became part of the 500 Red kites that have been equipped with a GPS in Europe in the last 2 years. In Spain the species is classified as Endangered and 100 juvenile nestlings are being tagged and released during the project, an activity supported by Mossy Earth. With the increasing availability of GPS devices for species tagging, this method is becoming increasingly important in understanding the behaviour and threats to different species to design effective conservation strategies.
            
            After the release, the Red kite migrated to the south of France where it spent the summer, returning back to Spain with the beginning of the autumn migration to an area south of the release site. It was in this area in Extremadura where it was detected dead in late 2021 thanks to the GPS device. The GPS device played an essential role in quickly identifying the death of the bird and localizing the body, collecting important evidence at the scene and starting a police investigation.
            
            The necropsy carried out at the AMUS wildlife hospital confirmed poisoning as the cause of death and identified two toxins aldicarb and oxamil, both toxic pesticides, the former a toxin banned in the EU. The identification of these toxins in the body of the bird later led to the identification of an agricultural facility with possession of these substances and also the suspect.
            
            We applaud the excellent work of AMUS and all the authorities that were involved in the investigation process and we hope that this successful investigation will act as a deterrent to future wildlife poisonings.
            
            Check the most recent field report for more red kite updates, including some tagged birds travelling between continents and an eagle owl causing havoc.`,

        },
    ]
    return (
        <div className='w-1/2 fontFamily mx-auto py-20'>
            <h1 className='text-[32px] text-black font-[900] pb-5'>
                Hello, <br />
                Matt!
            </h1>
            <div className='flex flex-col gap-10 justify-center text-black items-center'>
                {
                    data.map((item, index) => (
                        <div key={index} className='flex flex-col'>

                            <div
                                className={`bg-white w-full  rounded-lg  shadow-md `}
                            >
                                <img src={item.img} alt="Card Image" className="w-full h-[250px] rounded-t-lg object-cover" />
                                <div className='flex flex-col gap-3 px-5 pt-5'>
                                    <p className='text-[24px] font-[800] text-[#2f3542]'>
                                        {item.title}
                                    </p>
                                    <div className='flex items-start gap-3'>
                                        <img src={item.user} alt="" className='rounded-full w-[50px] '   />
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[18px] font-[500]'>{item.username}</p>
                                            <p>{item.userdata}</p>
                                        </div>


                                    </div>

                                </div>
                                <div className="mt-4 px-5">
                                    <p> {item.desc}</p>
                                </div>


                                <img src={item.imgbelow} alt="Card Image" className="w-full h-auto  px-5 py-10 " />




                                {showComments && (
                                    <div className="my-10 p-5">
                                        <h2 className="text-lg font-semibold">Comments:</h2>
                                        {comments.map((comment, index) => (
                                            <div key={index} className="mt-10">
                                                {comment}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div
                                    className={`flex justify-center space-x-2`}
                                >
                                    <button
                                        className="text-blue-500 cursor-pointer"
                                        onClick={toggleComments}
                                    >
                                        {showComments ? 'Hide comments' : 'Show comments'}
                                    </button>
                                    {/* <button
                                        className="text-blue-500 cursor-pointer"
                                        onClick={toggleFullUpdate}
                                    >
                                        {showFullUpdate ? 'Collapse full update' : 'Read full update'}
                                    </button> */}
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default First