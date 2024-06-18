export default (
  ImageFormat,
  testImg,
  adLargeProportion,
  adSmallProportion,
  imgProportion,
  imgShiftLeftRight,
  imgShiftUpDown,
  headline,
  description,
  sponsorName,
  logoImage,
  layoutStyle,
  secondRichMedia
) => {
  console.log(secondRichMedia);
  console.log(testImg);
  const fileTag =
    ImageFormat.split("/")[0] === "image"
      ? `<img src=${testImg} alt="" />`
      : `<video src=${testImg} autoplay loop muted playsinline></video>`;

  const normalLayout =
    layoutStyle === "imageText"
      ? `
      ${fileTag}  
      <div class="headline">
                <span>${headline}</span>
                <div class="subscription">${description}</div> 
            </div>
            <div class="sponsor"><img src=${logoImage} alt=""/><span>${sponsorName}</span> - Sponsored</div>
            <div class="cta">Learn More</div>`
      : layoutStyle === "imageVideo"
      ? ` ${fileTag}  <div class="richMedia"> <video src=${secondRichMedia} autoplay loop muted playsinline></video> </div>`
      : ` <div class="richMedia"> <video src=${secondRichMedia} autoplay loop muted playsinline></video> </div>  ${fileTag}`;

  return `
    <div class="body" style="display: flex; justify-content: center;">
        <a class="div_out_1x1" href="https://chuckytech.com">
            ${normalLayout}
        </a>
    </div>

    <script>

          function resize(inputDiv, proportionSM, pictureSize, leftRightAdjust, topBottomAdjust, layoutStyle){
            var Width = document.querySelector('.body').offsetWidth

            // for img style
            if(document.querySelector(inputDiv + ' img') !== null){
                document.querySelector(inputDiv + ' img').style.objectPosition = \`\${(100 - leftRightAdjust) / 2}% \${(100 - topBottomAdjust) / 2}%\`;
                document.querySelector(inputDiv + ' img').style.objectFit = 'cover';
            }
            

            // for video style
            if(document.querySelector(inputDiv + ' video') !== null){
                document.querySelector(inputDiv + ' video').style.objectPosition = \`\${(100 - leftRightAdjust) / 2}% \${(100 - topBottomAdjust) / 2}%\`;
                document.querySelector(inputDiv + ' video').style.objectFit = 'cover';
            }
            

            // for div style
            var div =  document.querySelector(inputDiv);
            Object.assign(div.style, {
                border: '0.1px solid grey',
                backgroundColor: 'white',
                position: 'relative',
                textDecoration: 'none',
            });


            if(document.querySelector('.headline') !==null){
                // for div style
                var headline = document.querySelector('.headline');
                var subscription = document.querySelector('.subscription');
                var sponsor = document.querySelector('.sponsor');
                var sponsorName = document.querySelector('.sponsor span');
                var sponsorLogo = document.querySelector('.sponsor img');
                var cta = document.querySelector('.cta');

                document.querySelector(inputDiv).style.width = Width + 'px';
                document.querySelector(inputDiv).style.height = Width / proportionSM + 'px';

                if(proportionSM > 1){
                    if(document.querySelector(inputDiv + ' img') !== null){
                        document.querySelector(inputDiv + ' img').style.height = Width / proportionSM + 'px';
                        document.querySelector(inputDiv + ' img').style.width = Width / proportionSM * pictureSize + 'px';
                    }

                    if(document.querySelector(inputDiv + ' video') !== null){
                        document.querySelector(inputDiv + ' video').style.height = Width / proportionSM + 'px';
                        document.querySelector(inputDiv + ' video').style.width = Width / proportionSM * pictureSize + 'px';
                    }
                    
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    });
                    Object.assign(sponsorLogo.style, {
                        width: Width / 50 + 'px',
                        height: Width / 50 + 'px',
                        margin: '0px 5px',
                        overfit: 'cover',
                        overposition: 'center',
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
                    if(document.querySelector(inputDiv + ' img') !== null){
                        document.querySelector(inputDiv + ' img').style.width = Width + 'px';
                        document.querySelector(inputDiv + ' img').style.height = Width * 1 / pictureSize + 'px';
                    }

                    if(document.querySelector(inputDiv + ' video') !== null){
                        document.querySelector(inputDiv + ' video').style.width = Width + 'px';
                        document.querySelector(inputDiv + ' video').style.height = Width * 1 / pictureSize + 'px';
                    }
                    
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    });
                    Object.assign(sponsorLogo.style, {
                        width: Width / 50 + 'px',
                        height: Width / 50 + 'px',
                        margin: '0px 5px',
                        overfit: 'cover',
                        overposition: 'center',
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

            else{
                // for div style
                var image = document.querySelector(inputDiv + ' img');
                var video = document.querySelector('.richMedia video');
                var labelVideo = document.querySelector('.richMedia');

                document.querySelector(inputDiv).style.width = Width + 'px';
                document.querySelector(inputDiv).style.height = Width / proportionSM + 'px';

                if(proportionSM > 1){
                    if(layoutStyle === "imageVideo"){
                        image.style.height = Width / proportionSM + 'px';
                        image.style.width = Width / proportionSM * pictureSize + 'px';
                        video.style.height = '100%';
                        video.style.width = '100%';
                        labelVideo.style.height = Width / proportionSM + 'px';
                        labelVideo.style.width = ( Width  - Width / proportionSM * pictureSize ) + 'px';
                        labelVideo.style.position = 'absolute';
                        labelVideo.style.top = '0';
                        labelVideo.style.left = image.style.width;
                    }
                        else{
                        labelVideo.style.height = Width / proportionSM + 'px';
                        labelVideo.style.width = Width / proportionSM * pictureSize + 'px';
                        video.style.height = '100%';
                        video.style.width = '100%';
                        image.style.height = Width / proportionSM + 'px';
                        image.style.width = ( Width  - Width / proportionSM * pictureSize ) + 'px';
                        image.style.position = 'absolute';
                        image.style.top = '0';
                        image.style.left = labelVideo.style.width;
                    }
                    
                }
                else{
                    if(layoutStyle === "imageVideo"){
                        image.style.width = Width + 'px';
                        image.style.height = Width / pictureSize + 'px';
                        video.style.width = '100%';
                        video.style.height = '100%';
                        labelVideo.style.width = Width + 'px';
                        labelVideo.style.height = ( Width / proportionSM - Width / pictureSize) + 'px';
                        labelVideo.style.position = ' absolute';
                        labelVideo.style.top = image.style.height;
                        labelVideo.style.left = '0';
                    }
                        else{
                        labelVideo.style.width = Width + 'px';
                        labelVideo.style.height = Width / pictureSize + 'px';
                        video.style.width = '100%';
                        video.style.height = '100%';
                        image.style.width = Width + 'px';
                        image.style.height = ( Width / proportionSM - Width / pictureSize) + 'px';
                        image.style.position = ' absolute';
                        image.style.top = labelVideo.style.height;
                        image.style.left = '0';
                    }
                }
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
  }, ${imgShiftLeftRight}, ${imgShiftUpDown}, '${layoutStyle}');
                return;
            }
            else{
                resize('.div_out_1x1', ${
                  adSmallProportion.split("/")[0] /
                  adSmallProportion.split("/")[1]
                }, ${
    imgProportion.split("/")[0] / imgProportion.split("/")[1]
  }, ${imgShiftLeftRight}, ${imgShiftUpDown}, '${layoutStyle}');
            }

        }

        window.onload = function() {
            resizeDiv();
        };

        window.onresize = resizeDiv;
       </script>
    `;
};
