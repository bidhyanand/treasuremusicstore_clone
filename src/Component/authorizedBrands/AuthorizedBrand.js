import { dummyAuthorization } from "../../data/dummyData"
import AuthorizedCardDesign from "../AuthorizedCardDesign"
const AuthorizedBrand = () => {
  return (
    <>
    {dummyAuthorization.data.map((data,index)=>{
        
        return(
            <div>
                {/* <AuthorizedCardDesign imageData = {data} /> */}
            </div>
        )
    })}
    </>
  )
}

export default AuthorizedBrand