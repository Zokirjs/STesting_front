import React from 'react';
import ReactTooltip from 'react-tooltip';


export default function Map() {
    return <div>


        <img src="../assets/country.svg" alt="" />

        {/* <p data-tip="
            <p style='padding: 10px 0; font-size: 18px; font-weight: bold;'>
            Қорақалпоғистон <br>
            
            Umumiy natija: 9 % <br>
            
            Естественнонаучная грамотность: 0 % <br>
            
            Читательская грамотность: 0 % <br>
            
            Tabiiy - ilmiy savodxonlik: 10 % <br>
            
            O'qish savodxonligi: 10 % <br>
            
            Математическая грамотность: 0 % <br>
            
            Matematik savodxonlik: 8 % <br>
            </p>
        " data-html={true}></p>
         */}
        <ReactTooltip html={true} />
    </div>

}