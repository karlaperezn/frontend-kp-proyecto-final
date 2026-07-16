
export function PanelDisenoNB({ newWedding, setNewWedding }) {

    const optionFonts = [
        {
            tipography: ['Luxurious Script', 'Space Grotesk'],
            title: "Clásico",
            titleid: "h4-clasico",
            paragraphid: "p-clasico"
        },
        {
            tipography: ['Cedarville Cursive', 'Red Hat Mono'],
            title: "Artesanal",
            titleid: "h4-artesanal",
            paragraphid: "p-artesanal"
        },
        {
            tipography: ['Cinzel', 'Poppins'],
            title: "Elegante",
            titleid: "h4-elegante",
            paragraphid: "p-elegante"
        },
    ]


    const optionColors = [
        { colors: ["#838969", "#414C3A"] },
        { colors: ["#d6b853", "#386394"] },
        { colors: ["#8C3E4C", "#480202"] },

    ]




    return <div id="panelDiseno">
        <div id="tipography-selection">
            <h4 className="small-text">TIPOGRAFÍA</h4>
            {optionFonts.map((fonts) => {
                const selectedFont = JSON.stringify(newWedding.design.tipography) === JSON.stringify(fonts.tipography);

                return (
                    <div
                        key={fonts.title}
                        className={`option-container font-option ${selectedFont ? 'seleccionado' : ''}`}
                        onClick={() => {
                            setNewWedding(prev => ({
                                ...prev,
                                design: { ...prev.design, tipography: fonts.tipography }
                            }));
                        }}
                    >
                        <div className="fonts-container">
                            <h4 id={fonts.titleid}>{fonts.title}</h4>
                            <p id={fonts.paragraphid}>Nos encantaría pasar este día...</p>
                        </div>
                    </div>
                )
            })}
        </div>

        <div id="colorPalette-selection">
            <h4 className="small-text">PALETA DE COLOR</h4>
            {optionColors.map(palette => {
                const selectedColor = JSON.stringify(newWedding.design.colors) === JSON.stringify(palette.colors);

                return <div
                className={`option-container colors-option ${selectedColor ? 'seleccionado' : ''}`}
                onClick={() => {
                            setNewWedding(prev => ({
                                ...prev,
                                design: { ...prev.design, colors: palette.colors }
                            }));
                        }}
                >
                    <div className="color-preview" style={{backgroundColor: palette.colors[0]}}/>
                    <div className="color-preview" style={{backgroundColor: palette.colors[1]}}/>

                </div>
            })}

        </div>


    </div>
}