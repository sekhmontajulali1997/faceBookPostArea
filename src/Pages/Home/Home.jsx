import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { ImVideoCamera } from "react-icons/im";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaRegFaceGrin } from "react-icons/fa6";
import './Home.scss'

const Home = () => {
  return (
    <>
    
 <Container>
    <Row>
        <Col xxl={4}></Col>
        <Col xxl={5}>

            <Card className='mt-5'>
                <CardBody>

                <div className="ima d-flex gap-3 ">
                                <img style={{width: '40px' , height: '40px', borderRadius: '50%'}}  src="https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-1/312089853_1773966766293844_5315364280726779130_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_ohc=vNXOQhqa3FUAX85XyDL&_nc_ht=scontent.fblr20-1.fna&oh=00_AfB6TmqNqJ1nVZisa0XE3ZKmKviH1yy_kQyKMXwppevLDQ&oe=658C952B" alt="" />

                                <button style={{ borderRadius: '50px', border:'red', width: '100%', textAlign: 'start', padding:'0px 0px 0px 15px' }} > {"What's on your mind"}</button>
                            </div>

                            <div className="hrTag">
                                <hr />
                            </div>


                            <div className="allButton d-flex justify-content-around px-3">
                            <button className='allBtn1'> <ImVideoCamera/> Live video</button>
                            <button className='allBtn2' > <MdOutlinePhotoLibrary/> Photo/video </button>
                            <button className='allBtn3'> <FaRegFaceGrin/> Feeling/activity </button>

                            </div>

                            {/* <Row >
                                <Col xxl={4}>
                                
                                </Col>
                                <Col xxl={4}>
                                
                                </Col>
                                <Col xxl={4}>
                                
                                </Col>
                            </Row> */}
                        

                
                   
                </CardBody>
            </Card>



        </Col>
        <Col xxl={3}></Col>
    </Row>
 </Container>
    </>
  )
}

export default Home