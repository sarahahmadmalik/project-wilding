import React, { useState } from 'react'

const First = () => {
    // const [showFullUpdate, setShowFullUpdate] = useState(false);
    const [showComments, setShowComments] = useState(false);


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

    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([
      {
        id: 1,
        userImage: '/user1.jpg',
        userName: 'John Doe',
        datePosted: 'September 22, 2023',
        text: 'This is such a good project. Hoping this will catch on in other parts of the word as well. Slowing down rivers and streams keeps water available longer during the season for both wildlife and farmers. Keep up the good work.',
      },
      {
        id: 2,
        userImage: '/user2.jpg',
        userName: 'Jane Smith',
        datePosted: 'September 23, 2023',
        text: 'I love the community involvement on this project, so important',
      },
      // Add more comments as needed
    ]);
  
    const toggleComments = () => {
      setShowComments(!showComments);
    };
  
    const handleNewCommentChange = (e) => {
      setNewComment(e.target.value);
    };
  
    const handlePostComment = () => {
      if (newComment.trim() !== '') {
        const newCommentObj = {
          id: comments.length + 1,
          userImage: '/user3.jpg', // Set the user's image here
          userName: 'Your Name', // Set the user's name here
          datePosted: new Date().toLocaleDateString(),
          text: newComment,
        };
  
        setComments([...comments, newCommentObj]);
        setNewComment('');
      }
    }  
    return (
        <div className='md:w-[83%] w-full px-[1.7rem] fontFamily md:mx-auto py-20'>
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




                                {showComments &&
          comments.map((comment) => (
            <div
              key={comment.id}
              className="mt-6 bg-gray-100 rounded-lg p-4 flex mx-8"
            >
              <img
                src="/images/user.avif"
                alt="User Profile"
                className="rounded-full w-[50px] h-[50px] object-cover mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-semibold">{comment.userName}</p>
                  <p className=" text-[12px] text-gray-500">{comment.datePosted}</p>
                </div>
                <p className="mt-2">{comment.text}</p>
                <button
                  className="mt-2 text-blue-500 cursor-pointer"
                  onClick={() => {
                    // Handle reply button click here
                  }}
                >
                  Reply
                </button>
              </div>
              
            </div>
            
          ))}

          {showComments && (
              <div className="mt-4 p-5 ">
              <textarea
                className="w-full h-20 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
                placeholder="Write your comment..."
                value={newComment}
                onChange={handleNewCommentChange}
              ></textarea>
              <button
                className="mt-2 text-white bg-blue-500 rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none"
                onClick={handlePostComment}
              >
                Post Comment
              </button>
            </div>
          )}
            
                                <div
                                    className={`flex justify-center space-x-2 my-8`}
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