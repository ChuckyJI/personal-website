export default (
  testImg,
  adLargeProportion,
  adSmallProportion,
  imgProportion,
  imgShiftLeftRight,
  imgShiftUpDown,
  headline,
  description
) =>
  `
    <div class="body" style="display: flex; justify-content: center;">
        <a class="div_out_1x1" href="https://chuckytech.com">
            <img src=${testImg} alt="" />
            <div class="headline">
                <span>${headline}</span>
                <div class="subscription">${description}</div> 
            </div>
            <div class="sponsor">SPONSORED BY <span>ABCDE</span></div>
            <div class="cta">Learn More</div>
        </a>
    </div>

    <script>

          function resize(inputDiv, proportionSM, pictureSize, leftRightAdjust, topBottomAdjust){
            var Width = document.querySelector('.body').offsetWidth
            // for img style
            document.querySelector(inputDiv + ' img').style.objectPosition = \`\${(100 - leftRightAdjust) / 2}% \${(100 - topBottomAdjust) / 2}%\`;
            document.querySelector(inputDiv + ' img').style.objectFit = 'cover';

            // for div style
            var div =  document.querySelector(inputDiv);
            Object.assign(div.style, {
                border: '0.1px solid grey',
                backgroundColor: 'white',
                position: 'relative',
                textDecoration: 'none',
            });

            // for div style
            var headline = document.querySelector('.headline');
            var subscription = document.querySelector('.subscription');
            var sponsor = document.querySelector('.sponsor');
            var sponsorName = document.querySelector('.sponsor span');
            var cta = document.querySelector('.cta');

            document.querySelector(inputDiv).style.width = Width + 'px';
            document.querySelector(inputDiv).style.height = Width / proportionSM + 'px';

            if(proportionSM > 1){
                document.querySelector(inputDiv + ' img').style.height = Width / proportionSM + 'px';
                document.querySelector(inputDiv + ' img').style.width = Width / proportionSM * pictureSize + 'px';
                if(Width <= 576 || proportionSM >= 5){
                    Object.assign(subscription.style, {
                        display: 'none'
                    });
                }
                else{
                    Object.assign(subscription.style, {
                    fontSize: Width / 50 + 'px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'grey',
                    lineHeight: '1.5',
                    textDecoration: 'none',
                    fontWeight: 'normal',
                    display: 'block',
                });
                }
                
                Object.assign(headline.style, {
                    fontSize: Width / 25 + 'px',
                    fontWeight: 'bold',
                    color:'black',
                    padding: \`\${Width * 0.02}px \${Width * 0.02}px\`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    textDecoration: 'none',
                    position: 'absolute',
                    left: \`\${Width / proportionSM * pictureSize}px\`,
                    top: '0',
                });
                Object.assign(sponsor.style, {
                    fontSize: Width / 55 + 'px',
                    padding: \`\${Width * 0.01}px \${Width * 0.02}px\`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: '#ccc',
                    position: 'absolute',
                    bottom: \`\${Width * 0.05}px\`,
                    left: \`\${Width / proportionSM * pictureSize}px\`,
                    textDecoration: 'none',
                });
                Object.assign(sponsorName.style, {
                    fontSize: Width / 50 + 'px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'orange',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                });
                Object.assign(cta.style, {
                    fontSize: Width / 50 + 'px',
                    padding: \`\${Width * 0.01}px \${Width * 0.02 * 2}px\`,
                    margin:  \`\${Width * 0.01}px \${Width * 0.02}px\`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'white',
                    backgroundColor: 'orange',
                    position: 'absolute',
                    bottom: '0',
                    right: \`auto\`,
                    left: \`\${Width / proportionSM * pictureSize}px\`,
                    backgroundColor: 'orange',
                    borderRadius: '15px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                }); 

            }
            else{
                document.querySelector(inputDiv + ' img').style.width = Width + 'px';
                document.querySelector(inputDiv + ' img').style.height = Width * 1 / pictureSize + 'px';
                if (proportionSM === 1){
                    Object.assign(subscription.style, {
                        display: 'none'
                    });
                }
                else{
                    Object.assign(subscription.style, {
                    fontSize: Width / 24 + 'px',
                    padding: \`\${Width * 0.02}px 0px\`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'grey',
                    lineHeight: '1.5',
                    textDecoration: 'none',
                    fontWeight: 'normal',
                    display:'block',
                });
                }
                Object.assign(headline.style, {
                    fontSize: Width / 18 + 'px',
                    fontWeight: 'bold',
                    color:'black',
                    padding: \`\${Width * 0.02 * 3}px \${Width * 0.02}px\`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    textDecoration: 'none',
                    position: 'absolute',
                    top: \`\${Width * 1 / pictureSize}px\`,
                    left: '0',
                });
                Object.assign(sponsor.style, {
                    fontSize: Width / 35 + 'px',
                    padding: \`\${Width * 0.02 * 4}px \${Width * 0.02}px\`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: '#ccc',
                    position: 'absolute',
                    bottom: '0',
                    left: \`0\`,
                    textDecoration: 'none',
                });
                Object.assign(sponsorName.style, {
                    fontSize: Width / 35 + 'px',
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'orange',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                });
                Object.assign(cta.style, {
                    fontSize: Width / 35 + 'px',
                    padding: \`\${Width * 0.02}px \${Width * 0.02 * 2}px\`,
                    margin:  \`\${Width * 0.02 * 3}px \${Width * 0.02}px\`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: 'white',
                    backgroundColor: 'orange',
                    position: 'absolute',
                    bottom: '0',
                    right: \`0\`,
                    left: 'auto',
                    backgroundColor: 'orange',
                    borderRadius: '15px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                }); 
          }
        }

        function resizeDiv() {
            var Width = document.querySelector('.body').offsetWidth;    

            if(Width > 576){
                resize('.div_out_1x1', ${
                  adLargeProportion.split("/")[0] /
                  adLargeProportion.split("/")[1]
                }, ${
    imgProportion.split("/")[0] / imgProportion.split("/")[1]
  }, ${imgShiftLeftRight}, ${imgShiftUpDown});
                return;
            }
            else{
                resize('.div_out_1x1', ${
                  adSmallProportion.split("/")[0] /
                  adSmallProportion.split("/")[1]
                }, ${
    imgProportion.split("/")[0] / imgProportion.split("/")[1]
  }, ${imgShiftLeftRight}, ${imgShiftUpDown});
            }

        }

        window.onload = function() {
            resizeDiv();
        };

        window.onresize = resizeDiv;
       </script>
    `;
