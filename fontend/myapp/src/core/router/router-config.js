import rootRouter from "./router";
import App from '../../App'
import Home from '../../views/home/HomePage'
import Login from '../../admin/login/Login'
import Register from '../../admin/register/Register'
import Admin from '../../admin/Admin'
import HomeAdmin from '../../admin/pages/home/Home'
import NotFound from '../../views/not-found/NotFound'
import Buyer from "../../views/buyer/Buyer";
import BuyerLogin from "../../views/buyer/BuyerLogin";
import BuyerSignup from "../../views/buyer/BuyerSignup";

const routerConfig = [
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: rootRouter.HOME,
                element:<Home/>
            }
        ]
    },
    {
        path:'/buyer',
        element:<Buyer/>,
        children:[
            {
                path:rootRouter.USERLOGIN,
                element:<BuyerLogin/>
            },
            {
                path: rootRouter.USERSIGNUP,
                element:<BuyerSignup/>
            },
            {
                path:rootRouter.USERRESET
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'register',
        element:<Register/>
    },
    {
        path:'/admin',
        element:<Admin/>,
        children:[
            {
                path:rootRouter.ADMIN_HOME,
                element: <HomeAdmin/>
            }
           
        ]
    },
    {
        path:'*',
        element:<NotFound/>
    }
]
export default routerConfig;