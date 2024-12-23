/*import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';
export function Card(){

    const [iconData, setIconData] = useState(null);

  useEffect(() => {
    const fetchIconData = async () => {
      try {
        const response = await axios.get('https://assets-global.website-files.com/65f88d817325f02fb900683c/65f88d817325f02fb900688b_Winning%20Partnerships%20Icon.json');
        setIconData(response.data);
      } catch (error) {
        console.error('Error fetching icon data:', error);
      }
    };

    fetchIconData();
  }, []);


    
  



    return (
        <div className="flex flex-col justify-center items-center text-center rounded-3xl bg-white px-10 py-16 gap-3">
            <div className="pb-10">
            <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          controls
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
          style={{ width: '320px' }}
        ></lottie-player>
            </div>
            <div>
                <h1 className="text-3xl">Winning Partnerships</h1>
            </div>
            <div>
                <p className="text-sm text-[#7c7c7c]">Your team can benefit from value-added partners in telemedicine, mobility, meal boxes, etc. All to make their wellness experience more rewarding and profitable.</p>
            </div>
        </div>
    )
}*/