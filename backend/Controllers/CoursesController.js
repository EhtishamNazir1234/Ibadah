import Course from "../Models/Courses";
export const getCourses = async (req, res) => {
    const{price,weeks,enrollments}=req.query;
    try {
        let courses;
        if(price){
            courses=await Course.find({price});
        }else if(weeks){
            courses=await Course.find({weeks});
        }else if(enrollments){
            courses=await Course.find({enrollments});
        }else{
            courses=await Course.find();
        }
        res.status(200).json({message:"Courses fetched successfully",data:courses});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server error, please try again later"});
    }
};
export const updateCourse=async(req,res)=>{
    const{}
}


