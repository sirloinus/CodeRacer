import React from 'react'
import { Transition } from 'semantic-ui-react'

const Start = ({ handleGoClick }) => {

    return (
        <Transition animation='pulse' duration={200} unmountOnHide='true'>
            <div class="single-chart">
                <svg onClick={handleGoClick} viewBox="0 0 36 36" class="circular-chart blue">
                    <path class="circle-bg"
                        d="M18 8.4507
                        a 9.54929 9.54929 0 0 1 0 19.0986
                        a 9.54929 9.54929 0 0 1 0 -19.0986"
                    />
                    <text x="18" y="19.7" class="percentage">TYPE</text>
                </svg>
            </div>
        </Transition>
    )

}

export default Start