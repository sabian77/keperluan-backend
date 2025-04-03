import Express from "express"; 
import dummyController from "../controllers/dummy_controller"; 

const router = Express.Router();

router.get("/", dummyController.dummy);

export default router;