import { useState } from "react"

function BookingForm({availableTimes,dispatch, submitForm}) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        date: "",
        time: "00:00",
        numOfGuests: 1,
        occasion: ""
    })

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }

    const handleDateChange = async (event) => {
        const { name, value } = event.target
        
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }))
       dispatch({ type: 'UPDATE_TIMES', payload: value })
      }

    const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)
    }
    const options = availableTimes.map(time => <option key={time}>{time}</option>)
    return (
      <main>
        <p className="desc-text form-desc">Please fill in the form below.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} required />
          </div>
          <div className="form-div">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleFormChange} required />
          </div>
          <div className="form-div date-time">
            <div className="form-div-child">
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required />
            </div>
            <div className="form-div-child">
              <label htmlFor="res-time">Choose time</label>
              <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
                {options}
              </select>
            </div>
          </div>
          <div className="form-div guests-occasion">
            <div className="form-div-child">
              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" required id="guests" name="numOfGuests" value={formData.numOfGuests} onChange={handleFormChange}/>
            </div>
          </div>
          <div className="form-div-child">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" value={formData.occasion} onChange={handleFormChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          <input className="submit" type="submit" value="Reserve" aria-label="submit button"/>
      </form>
      </main>
    )
  }

  export default BookingForm;