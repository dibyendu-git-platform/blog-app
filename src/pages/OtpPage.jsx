import { useEffect, useRef, useState } from 'react'

function OtpPage() {
  const [inpArr, setinpArr] = useState(new Array(5).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus()
  }, [])

  function handleInputOnChange(e, index){
    const value = e.target.value.trim();

    if (isNaN(value)) {
      return
    }
    const newArr = inpArr.slice();
    newArr[index] = value.at(-1) ? value.at(-1) : "";
    setinpArr(newArr);
    value && refArr.current[index + 1]?.focus();
  }

  function handleOnkeyUp(e, index){
    if (e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  }
  return (
    <div className='w-1/2 mx-auto bg-amber-50'>
      <h4 className='text-center text-2xl'>Please Enter Your OTP Below</h4>
      <div className='mt-2 p-2'>
        <div className="inp w-3/4 mx-auto text-center">
          { inpArr.map((item, index) => 
            (
              <input type="text" name={`inpname${index}`} id={`inpId${index}`} className='border m-1 size-12 text-3xl p-2 text-center' key={index} 
              value={inpArr[index]}
              ref={(input) => (refArr.current[index] = input)}
              onChange={(e) => handleInputOnChange(e, index)}
              onKeyUp={(e) => handleOnkeyUp(e, index)}/>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default OtpPage
