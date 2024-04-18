import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer $(selectedGender ==="male" ? "selected" : "" )'}>
                <span className='label-text'>Male</span>
            <input 
            checked={selectedGender==='male'}
            onChange={()=> onCheckboxChange("male")}
            type="checkbox" className='checkbox border-slate-900'/>
            </label>

        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer $(selectedGender ==="female" ? "selected" : "" )'}>
                <span className='label-text'>Female</span>
            <input 
             checked={selectedGender==='female'}
             onChange={()=> onCheckboxChange("female")}
            type="checkbox" className='checkbox border-slate-900'/>
            </label>

        </div>
    </div>
  )
}

export default GenderCheckbox








/*
STARTER CODE FOR GENDER CHECKBOX COMPONENT



import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-slate-900'/>
            </label>

        </div>
        <div className='form-control'>
            <label className={'label gap-2 cursor-pointer'}>
                <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-slate-900'/>
            </label>

        </div>
    </div>
  )
}

export default GenderCheckbox


*/