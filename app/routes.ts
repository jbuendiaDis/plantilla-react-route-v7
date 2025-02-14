import { type RouteConfig, index, layout, route, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    layout("./layouts/public/public.tsx",[
        ...prefix("auth",[
        index("routes/login.tsx"),
        route("forgot-password","routes/forgot-password.tsx"),
        ]),
    ]),
    layout("./layouts/private/private.tsx",[
        ...prefix("dashboard",[
            index("routes/dashboard.tsx"),  
            route("profile","routes/profile.tsx")
        ]),
    ]),
    ] satisfies RouteConfig;
