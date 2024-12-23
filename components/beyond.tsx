import { Card } from "./card";

export function Beyond(){


    return (
        <div className="flex flex-col justify-start items-center text-center bg-[#edd8fe] rounded-3xl w-full py-32">
            <div className="pb-10">
                <h1 className="text-6xl font-medium">Going beyond benefits</h1>
            </div>
            <div className="pb-20 w-[20%]">
                <p className="text-base">Tedy is much more than benefits; we offer a suite of powerful tools integrated into one intuitive platform, ensuring you stand out as an employer on every level.</p>
            </div>
            <div className="flex gap-10 w-full items-center justify-center">
                <Card title="Winning Partnerships" description="Your team can benefit from value-added partners in telemedicine, mobility, meal boxes, etc. All to make their wellness experience more rewarding and profitable." link="https://assets-global.website-files.com/65f88d817325f02fb900683c/65f88d817325f02fb900688b_Winning%20Partnerships%20Icon.json"></Card>
                <Card title="Secure & Confidential" description="Tedy relies on the highest standards of security to protect your data and the confidentiality of our users' activities on the platform." link="https://assets-global.website-files.com/65f88d817325f02fb900683c/65f88d817325f02fb900688f_Secure%20and%20confidential%20Icon.json"></Card>
                <Card title="5-Star Support" description="Fast, high-quality, resourceful support. We offer unprecedented support in configuring and using Tedy for employers and employees." link="https://assets-global.website-files.com/65f88d817325f02fb900683c/65f88d817325f02fb900688c_Five%20Star%20Support%20Icon.json"></Card>
            </div>
        </div>
    )
}