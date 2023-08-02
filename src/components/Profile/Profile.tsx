import React, { useEffect, useState } from 'react'
import './Profile.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { userProfile } from './userProfile'
import List from '../List/List'
import { setGuide } from '../../store/slices/guides.slice'
import { useAppDispatch } from '../../store/hooks'
import { useParams } from 'react-router-dom'
import { IUser} from '../../interfaces/interfaces'

function Profile() {
  const { id:value } = useParams()
  const dispatch = useAppDispatch()
  const [tourGuide, setTourGuide] = useState<IUser>()

  const handleUserName = () => {
    dispatch(setGuide({value}))
  }

  useEffect(() => {
    handleUserName()

    if(value && Object.hasOwn(userProfile, value)) {

      let key: keyof typeof userProfile
      for (key in userProfile) { 
        if(key == value) {
          setTourGuide(userProfile[key])
        }
      }
    }
    
  }, [])

  return (
    <>
        <Navbar />
          <div className='container-md'>
          <div className="row">
              <div className="col-12 col-sm-12 d-flex flex-column align-items-sm-start align-items-md-center profile" >
                <div className='profile__container'>
                    <h1>Profile</h1>
                    <p>{tourGuide?.profile}</p>
                </div>

              </div>
              <div className="col-sm-12 col-md-4 d-flex flex-column align-items-sm-start about" >
                <div className='about__container'>
                  <h2>About me</h2>
                  <p>{tourGuide?.about}</p>
                </div>  
              </div>
              <div className="col-sm-12 col-md-5 d-flex flex-column align-items-center pic">
                <div className='picture-container'>
                    <img src='/img/user.jpg' alt='Profile picture' />
                </div>
              </div>
              <div className="col-sm-12 col-md-3 d-flex flex-column align-items-sm-start details">
                <div className='details__container'>
                    <h2>Details</h2>
                    <List details={tourGuide?.details} />
                    
                </div>
              </div>
          </div>
      </div>

      <Footer />
    </>

  )
}

export default Profile