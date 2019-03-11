import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props) ;
            this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                     'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}} >My Portfolio</CardTitle>
                    <CardText>
                        Portfolio page to showcase projects, resume and interests of web developers
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/mitchellglazier/Portfolio" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                        {/* <Button colored>CodePen</Button> */}
                        <Button colored>Website</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                     'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}} >New Golden Dragon</CardTitle>
                    <CardText>
                        Chinese restaurant website that allows online ordering and payments.
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/mitchellglazier/" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                        {/* <Button colored>CodePen</Button> */}
                        <Button colored>
                        <a href="https://new-winter-dragon.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                     'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/120224034/original/5adb956e5e397adc1af519c37411b90eee802f6c/develop-angular-6-component-or-library.jpg) center / cover'}} >Gripe</CardTitle>
                    <CardText>
                        Social media/comments platform for discussions
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/mitchellglazier/Gripe" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                        {/* <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                     'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/120224034/original/5adb956e5e397adc1af519c37411b90eee802f6c/develop-angular-6-component-or-library.jpg) center / cover'}} >Telenotes</CardTitle>
                    <CardText>
                        Web based CRM software for outside sales associates
                    </CardText>
                    <CardActions border>
                        {/* <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button> */}
                        <Button colored>
                        <a href="https://telenotes.com/" rel="noopener noreferrer" target="_blank">Website</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                     'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/120224034/original/5adb956e5e397adc1af519c37411b90eee802f6c/develop-angular-6-component-or-library.jpg) center / cover'}} >Telenotes Testing</CardTitle>
                    <CardText>
                        e2e testing of Telenotes application using Selenium/Protractor
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/mitchellglazier/telenotesE2ETesting" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                        {/* <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button> */}
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>

            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background:
                     'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAELAdoDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAECAwQFBgf/xABCEAACAgECBAMFBgMFBwQDAAABAgADEQQhBRIxQRNRYQYicYGRFDJCUqGxFWLBI3LR4fAWM0NTgpKTBySisiVE8f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAzEQACAgEDAgQEBQMFAQAAAAAAAQIDEQQSITFBBRNRYSIycYEUkaHh8BXB0SMzQlKx8f/aAAwDAQACEQMRAD8A+RwhCBQQhCABCEIgCOKMQGOOKOIBxRxGBQoQjEYwhCEQBCEcAFCOEBhCEIAEcIQAIQhAYQjhAMBCEIgCEcIDFCOGIBgUI8QxAMEcQxJYhiAYIwjhAQoQhGIUI4oCCEIRDFCEUBhEYGIxkthCEJRkEIQgIIQhAAhCEACEIQAIQhAoIQhEMIQhAAjihACUciJIRDHAwgYiiMcUcYBCEcACEIQGEIRwAUcIQAIQjgUEIR4gAo8R4hEMWI8QjxEAoYjxHGBHEMSUIgIwksQxArBHEMSUIDwQxFJGKNENEYRwjIFCEIAKEMyJMQwMUIRktiMIQjRDCEIRkhCEIAEIQgAQhCABCEICCEIQKCEIRAEIQgMIQhABxiRjERSJxxCOSURhA9YRgEcIQGEcUcACE118N4naFavSXEN0OMA/MzSnAOMt1oRP79qD9iYtyRoqZvomcuE7qezPET9+7TJ83b9hNVPsrzMq269VB2zXUTg/FmEl2RXc1jpbZPCieZhPar7H6JfvayxvQciZ/Qy0ey3CQBlbW9RqAM//ABkefA614XfnlHho57sezXAh96jVfLUA/sIx7N+z3/J1P/lJ/aLz4mi8Kv8AVfz7HhIT33+zXs9jaq4H+a2w/WVt7O8GU/7gkdsW2b/rBXRZM/DLocvB4aE9yOBcG6DSA/8AXYf6y1fZ7hR3+xJj+ZrMf/aPzYomPh1suh4GGJ9H/wBn+B4H/wCPqz3w74/UyB4DwXp9gpHr7+frmT+IidP9Hu9UfO459Ab2d4OdxpVH/VYP2MqPs1wn/kEf3bbP8YefAn+lXLseEhPbt7NcI/JcPha39RKj7NcJ7NqR8LAf3WPzYkPw+2PU8bFPXN7M8O7XaofND+6ytvZjSdtTqB5ZVDH5kTF6O1djysjieoPsxV21lnzrX+hme32a1I3p1NT+jqyH6jIlKcWZS0tq7HnjFOldwXi1Wc0c4Heplf8ATrMFlN9RIsqsQj86sP3l5RzSrlHqiEiYEyJMZnwgJiihGRnkI4QgAoQhGSEIQjEEIQgIIQhAAhCEACEIQEEIQgUEIQiAIQhAYQhCAwjijgBNZKQWWSGaIgesI2HQxQHgIRzZoOG6ziNnh0VsQN2bBIAHWGcF11yskowWWzLXVZawStSzHsP6mek4ZwmmtGt1KB7LF5aweiZOeYDz8pu0fCtNoh7yFrFGWLAj5kGS1OtqpVimHcEAKDgZPrPNu1Lm9lZ9XpPB1QvOv6+nU6vB9Fw9NQbNU4WitGZ1schXJGAMZnQ1T8BoqN9dDPUHCYDtzknyVjnE8Out1DM17OrMDzKjL7oA7Y6zRRxTV6uw02CsJyl/cXByvTvKw1U8vlex3VPTTtjDDW7hLt9z0TcQ4Gynl0uqrbHukMCM+oLGYvt1YJznf+XpMRlbkAEzljdJnsXeGUJd19zb/GtGvMGZhynBzW39JJeOcNPW1fmrj+k81qDz2vyn8O/rgSgDONhPRjBNZZ8bdfZVNxi+EexXi/DW/wCNXj4kfuJavEeHnpqKh/1CeOVegloT0icEVHU2s9gus0jdNTVv/OBLBZS24srI7kOp/rPLaTh2s11nh6ahrCPvN0RB5ux2no+CcH4YdRrK7ymrt0q1c64/sFdyTsD16TGUoxeO52VynLlrg3VXIAAGQj5fvLDqKl++yDyJdQP1nQ1XDtLqkClBW6jCPWoBA8sDbE8nxrhuoooYWJshD12LujAdd5h1lh9D0oSi6m4v4l29TufatJ/z6f8Ayp/jF9r0ffUUf+Wv/GfPxWWxtL7tOtdhQBdlTdc4JwCTvNnSk8ZOGOtsaclDhe57ZtZoh01OmHqbU/bMqOu0XfXaYfCxP8Z4nwwO0RQeUtUr1M5eIT/6/qexbXcMHXW0H/rBlR4lwkf/ALdX1M8ly+kiV9JarRyy1s30ij2Da7h6qHbUV8rfdO+8geIaDkNnjKUBxknG/lg7zybMxCgkkKMAHtIO2wHkD+sSrKesisvB6n+KaEjNZZ/7o/xmd+J/kqbHqQJ5tWKMrjqCOnceU7DVpbSLKTjnXoemfKKzFbWTTSxnq1LZ1XYLuL25PhooToCw5iSOveZxrdZqGKi5ACPulR+xnPZbAeXlJPPybdObpjMi3i02HIwydfjK2p/Kzl3yhJStj8OeTW/C21HOCUV8FldRj3vysBOHdRdRY1dqFWU436H4GdeniN9RPMA6s3MQdiPgZYbKNVtrCgW1/c6g19hg9ZVUrIvE+hGup0mogp6ZtS7p/wCTz8Jv4hw67QuuctTYM1WAbMOuCRtmYJ1pprKPnrKpVTcZrDQQhAxkChCECQhCEACEMR4jAUI8R8sQEYYMniEAwRxDElCAEIQhAAhCEBhCEIAEIQgMI4o4gJL1lwGRKV6zQo2BkyNorJWR7p9DIS8oQXHZl5l+U18N4a2tsDWMa9KjKLrcZO/4VHdpDkorLOiuids1XWsti4bw59bYWctXpa2Hi2AZJPXkTP4j/r195wvmFa16LTpo9AoAFgIs1F2NupGB9DOHr6tToL/sumrU6M8iaVsdEsXIbI6k9zO5dqatFp9Npw6o9iiinJxlgu5/15zzbdVZLHl9+h9hodDTTDHO7u3wvZL2M3HqVRNBfS7sLfEFjM7Mz4bAySZ5fWFjgb5znbrtPYcUrH8L4WCRzpUcj4knM8bczGxl5Tnou3Unyk0J72pdjo10dunwn1bX5MzczHJJ3xj5Tfw+q1XN5UivlZQfPONwIV8OsCeJYRzDfw/IdfeM1U6oABXHTbPYYmt1u6LUOTDwzw51Wxt1T291+5c1igTJqbv7M46yvX3KtgWtgSRlwOgMys7Og8h1mdNXSTOrxHxLMp1R6ogCSSc9ZIbSsHpiWYYAZzg9J6GT5GKb5LaldmJRHZUBawopYIvdmx2kzeqkci82CM56Gdj2V1ATiJ0luDRrqLdO6noSRzAH9Zytdo30Ot1Wkf8A4FpVSfxId1b5jEz4bwzqzKEVKDO5X7Q1abhV1GnTkvd8BQNhkYJmr2IZ3s40zEszfZmYnqSS/WeQflwdt8jeev8AYb7/ABj+5pv3eZ+VGEW0aS1MrbYqX6evqe0xI2VU3I9VqK9bgq6sMgg9jLQI1RV5sDHMeY+p85znXuweL4p7MWUc9+gDW0/eak721j+XzH6zz3h+n1nuPaXjH8O0w02nb/3uqU4IO9NXQv8AE9F/ynhq9JxUqr16bVsjDIK1uynPfIGJvHplswdiXCWfoBrkfDmhaOKjZtBqT8KLAf2lgp1J+9pNWvxosx9cSt2O4JRn/wDDD4cqsHLgfWdC6tqRzWo6A5xzqy82PLmE5rtkk+ZlxeTC+KrWO5WZW0m28pdguZr0PPbyJmxNWi1aqr1O2EB5gfScx3JzHXyjds9DJnBTjhm+i1ctNapwOtbrqwhTTr1OSzDv5gTKrvqm8OwgPg8r4xkjs3aZuYRq4BHQ75IPfyEzjUoLg9C7xCWpmvMfw+nRFj1gOyKyvy9WXPL8iZU3MRgnOMj4S2xnqyuOhPMT+Y7xczoAi494b5Ges1jJnBbXDc0uP5wjtmqq3RVmxs1eCrMrklRsM4z0nndZon05V1y1LYKP8exmtWuYLQ7sEI9xSdsjtOgtVp5aLiHrNaqA42CnfEituvhs6tZVHW/FVHDSSfuzzEU6es4c+nC215bTudm7ofytMXIJ1p55Pm7ISg9supTiPllvKIYjMsFfLHgSUOWA8EYYk8RGIBYijijEEIRZgIIRZhACMIQjAIQhEMIQhAAhCEBhHFHEAS+mz8J7yiOJrKNIy2vJ6HhfCruJNZhX8LSjxbXQZY1nYomduY9pvGpNKipdOlVVOVqrUtsAd8k9T5mP2P4tbprhTzVhqy11ZtBKsGHI6OPI/wCuk7vG9FVq9QdVp20un02pwLUNyOK9R3NZXsfLAnlWufmuE18PZ+/ufYeFzjBb63htdeOvp+5wzxYvWlL6cMFZSh5slQGDYG3xx8Zl4pqatTc7OSCijwApyvKdyD5HvLl0N+mvdrOWxaxms078zeeGxK7Kzq7Cr6Y1YwWtfZiPQDaRFQhPdHoevKu+6pxl80nwmv8AHCLKddxDiNdGi5GselAosH4ahtzW/DYZm+7hdNWkdg3NqFwwsH4cdlE51wbRUpbpvcemwNnqWB2IY9we862h4jRxCll2S4Liys9u2Vz2kT5TnBcG1MXTNafUvMscfT29zkJqyjeFqRyttyuPukesx6tkqsPhMCG97A/CYtcStllL55q3zW3mjbgTDvOmmpfOjyvEfEp4dD5w+H3XsybNzEnuesv04DNynvM4G2fOXUtyup9JtPoeRpv91Sn3fIOgR2UdAdvhL3y1VZI6N1+UpYlnJOev6S+5l8JAvXImbb4ydkYxSsa6Bpb20up0mpU4NF9dv/awJnqPbDRqW0XE6h7lyii0j4c9bHHmMj5TyKYZWB+IzPoWirHGvZiuhjm37O1AJ7Xac+4f0H1inLDTOetbouPqfP8AlyDOlwbjGo4O+qaqpLPHWtW587chJ2+sxrWxYrjBUkMPIjYgyXhhSZrKSa2mcapxamux6dfbLWd9HV/3GWD2z1A66Ksn+8Z5SHUzJUx9/wA2bSvkuy/Iv1Wov12ov1WobmtuYlvIDoFUeQ7T6R7NkvwvSb/dUifNUTM+leyQ5uGKPyWESbusf52FW8Vyb9js8hhyH1m0UnyiaogdJODl85HkPbDSePwk3AZbR312j+4/9m37ifN2GMz6F7Y64hE4dWw97FupPkB91f6z5vqtQqkqm59JvU+MDuSSUpFd1qrsDvMTuWiYljkmSRGbopPwnSo45POnJy4XQQAljcu2BjYAj185NdNad8YEu+z+ZzH1LjhJoyfCSCOegmtakXtLWrFaL053GcflX1+MWcDjFvL9CFiIEpwWJZM2lt/7TPUGVhfeBPYg/SXAjkKkb5zmIARJYOqy12STXHQktfjui/jdgPSde+o+EnvFmrADN0yo7zJw6tTdznpWM/M7CdCw122JWTmmsl3CnexgNlB8pxWzfmJeh9LoKIvTTlL5pcL7dzBpqbbGuCjmrAJcMR4bejAzj6zT11MHqOK7C2EJyUI7Z8vKenOjtapvs5fns2NdYJ8Qk4wAs5fFdEdKunq1NlaXqCXoUhrKlO4FhGwPpmddVik+D5/xDRuiKjJc9c54fPY4JEORj12+MtZ6V2X69TKmsJnSeA8IMKsRIkCxMWTGRkZIizFFAkeYoQgAoYjhAQsQjigIjCEIxhCEIAEIQiGEIQgMI4oQAcIQiKLqLXptrsRirKwIZeonptLxOrUEJYRXqcgYxmu3yK+R9J5SaM/dbvgbjzkTjuO3TaiVSeD166g+IwvstCjK8uAQD67ZhdcEIREZmP3RkHOfhOTouLV2FKeIbjl5Fu/F6F/X1nQanw3R6rgy/eRlOcA+YnnWURzyj67R+J2eXiMsrPXuvqmVX2O1d1NteHdCF8PJGeuN/Kc+sWVlLKiVtVtip/TedUJqQ7OVDI4OHQ5IU9cd95itNZfFY90GVVtw4oNfOxuNs3yuFlYf1KNSuovtVnXDlFAGNtuvWWrwxxh3srwMMQQxUjrgkYlxuPLjl36HMiXZgilmwvQA7SttmMR4M4S0cpSncnJv3I2aTxSDVSlXXISx2Q/BXyR9ZQ+k1NYzy8wHUpvidbTeDYCr8wIxjBwDnymt66KabCFHuqcZOTk7d5zu2cZbWesvD9JZV5lbeMdcnmAT3kefsTtOuEr391fXYSwU0N1rQ/FROpNI+elQ5cJnGVhO3wrjPFdCjabQtXyPYbStlYchiACRky+vQcOtAD0KPVSVP6TdVwvh1SP4JsRmAGebmOPLJ3mFlkcYxyd2m8Ms3KUpLb7dTj6h2Nl9jhBdc7W3BByrzMckgTPXVfdkquQPUAfrOv8AwnTWE+JrTTudzQ1g+Putn9JaeD6alA1PG6LF7pXpNQzfMYkRzjMep2XU1qxRsyo+y/Y5A0uoUZZDjfpv+0rCkHfPrtN9lV4JVL8qOjmtkP0JlP2MOxa2612PU9JpXZJfOYanQVPHkt/cVS9J9H9il5tHcnk4M+f16Wpfumz/AL2nZ4dxLiPDVZdLqGrDkFgVV84/vgzO2aljHZmL8MtlXKEWsv8AyfXloUAZ+c5vFtfwzhWntu1OorRkQslRYG2xh0VEHvH6Tyem9rONIALGotA6+IgU/VCJevtZpqbGus4RpTYTlrayq2H4llJ/WdCnVJYzg8N+Da2uWWty9mv7ngNf/H+M6i+3T6DVlbnZjY9TjOewGOkoq9i/aW45+wa05/JQ/wD9nwJ9Gu/9Q61GKeHnm7c9mV/QCYl9vuKWs4arSUrj3eVLHb58zYmsXXCPDCyjV3y2ygl9+F+R5QewntGic/8ACdQ2PN6S/wD2B8zHfwjimiBGo4brKcDcvp7APqBiev1Htfxm1cLrzVk9aqq1OP8AqUzD/tDxW51W3impKseVh4hVTnbouBDzo4yi4eHXwltnj9f8HkCN8YiWq2xwldbsx6BQZ1bbKzY7FwSzHmLHct0JOZY1BeoFMFtsYOInakbV+Hym3t5wZquA65+U2lK1PUKyu/0Bx+s6VHBOD7+IL3cD8dhXJHXZYqK9RSuGs5xjZObYZnY4Rw5tZZ496sulqbu3++YfhGOw7yI2ub2o7rPDoVV+Y+PZ/sY6uH+zoVks0CEfmNloYfAhpk1PCfZs5NP2xDvgVWB1z6mwTVxvT18N1zCjmerUoLQjMcVNkjAPl5TGgssZc2LgDdKxtzHfdpF9s4extoNBVZFeY8v0xj9e5i/haqMVWNkvubN/d+CzRVw50xyMzucKAwHJ8506kU8+6ha1L3WOcV1IOrMZ57iXGjcz0aNiKMlWtAKtaB+UdhMalZb16HZrLtNouUvi7I267jacG0r6fh9gbiN6mu3VDddMnQpRn8Xmf9DxTu7ks7MzMSzMxJJJ3JJMnfYbHJzsNh8pUZ6tdagsI+F1mqnqbHOZExRmKaHCKKOKAgijigAQhCABCEIxBCEIgIQhCMAhCEACEIRDCEIQAIQhAY4QhEMJap90+kqk06wZpB4ZKb9Fr2pZa7WPhnADbkp/lMBiixlYNIzcJZR7AfadOKyVzTcviVld67F681TDaVasaZgttQzYdmCnB88sJzOE8cv4dmi6tdVw+xs3aS4nlB6eJS3VX9RPRXaDS6zStr+EXvfQo5rKWA+1acdxag6gfmHzxOGdeye5/wA+p9Jp9c7qXVLldk+30OGGJ88yQMsQVtkMeVvURmsbkDK/mAOPrNN2OpiqW47kySHcbkbjp1HrNVmayotDOjAFWQ5z8QZkC+U106lkJDrzgkFcdQZjYm+Uejo7FH/Tm8Z79V90B0urZspVhe2SOnylyaLVn8IH1/wnpOH8S0F1YS5FptTA/tFwG9Z16/sz4NZqbP5eUzmlK5dkdkoVwbbi39/2PFjTapO23z/wlqHUKMFdviJ7E1VHqi/QSttJpWG9a/ITFys7pGteprg+E19zyu53IxIU6W5zaQCBzAqR3nd1i6PSIzkrkDZOrN8AIDjPCtRoNLpBV4OoVw3ORgb5BUmawqnKLkmlj+cHZZqdyi4wzz/GcVqNSnqPJhmRVN/frX4idcjzlTKvkJi5yNIOGc4MQSrttLk0puGUIPY+kVhrQEsQJk+1Mp/siQD1PnBRbNp2cYTOpXw67GCcSFvDCwIJyD5mZV1upIALmDau4/jb6w2vPzMwe9/M1+Rn1Ogp06NYXGR0Xmzk9hicouQZ7bgvs8/F6LNVbbyV+Ia6+YZLcv3iP2nVb2Q4aikvc2BuSQoA+s3irPlUXI8bUavTKezfhr0R81a7ICkyrxVUg9cEH6T1HF+HcC06WVVXc95GBgLgH4iefGloUHmLE47CbrhYnHDKlC6xqUJLHvwYbCbbGwpIZiwGN951dFTryiqKGwTnmbIAEhw2rUpq6LU0rWor+8hH3lPX/Ken4hxLSadqtNowl2qtKKK6yCtLNtixhtkdwJW2Nvw5XH5kaab08vMk2m/yOfpeEavU2jxreTTqQbOTIYj8oPrPVJipErqAVEUKijoAJiOqpoVKkBvuAAKUjJLeZxMmqr4pbXzam5NDpT2z/asPIAby47K+nX9TpsUr5Zm8L3/sjl8e1FbauzxLByrXXWACCTsSQMTkaW5uW2wMum0FBzqNRdljv+FB3Y9gJDW16PTg6jV6hjRzN4Sj/f34OwQH9T2nnddxK/XMiMBVpqsiiivPh1g99+rHuTFGvzW5PucWv8Relargkmlj3+/ob+K8es1yjS6ZWo4ejcwrJ/tL2H/EvYdT5DoJyTcVU+crBkHOZ2RiorCPkbr53Sdk3lsPEMOeQimhyk+cQ5hIQgInmLMhCAieYZkIQESzDMjmEAJQkcwgIlCRhkwAIQhGAQhCABCEIhhCEIAEIQgMI4oQAckDvIwiKTwywxQhA0YTboOI63h16X6W10ZSCQpIB+kxQiaT4YRnKDzFntH1vDOK0JfVUKNaSBqFRQKT/PyjoT6bfCGntt02VdBZVn3h16+Rnj6braLFsrOGU/IjyI8p6fS6nT66tuRuS5RzWUE5zj8VfmJyzrUF6o+h0erVvtJdPc7K6LQ61DZpyVYfeUbFT6jpMtvC9WmSq86gZ2BzjzlNdz1FbaGZLFwCF6MPUT0fCOMaZ76RdiuwsEcMfccHbbM5XCS+Vns+ZXYvjit3txk5GncsBXYCLFHfuJpUsm6lgfQkT3Wp4Fw3V+81ISw7iyv3Tv3x0nk9fw6/QahqLN1PvVPjAsQ9/j5zz5SknlcHoaHxCm9eX3XqVV6/XV/dtJHk+8ep4zxIVYrRAT95wNx8pWFA7RlQwxiOOokuvJ12VVT7YZzAdZqnsYO1hADMWBOAfMzOzWMQDvjI2B/SdPmOm+0Vpt46othH5Qc4HxlaGvIJUZHn3mquy8j/AA8pRw2KjiLZSu1uQABebc79NwZsNx6+IpHbaRZeH2gc9TK3mpBH6ys1aetT4duEXfD7Y9AYSluecf8AgVx28T/8N38E1+trW2is2MSCCpBAEps4DxahQ1tDqCcAkDHn5yOh45qeF2K9FpKZ96v7ysJfxv2u1fE0SmhPBqG7kH3mYjBlKmcllT49GjyNRfdTdj4XH17/AJFGm4VrdQGNS84RirFSMAjsd5s/2e13KWsZECjLFmAA75M87puIa7SPz6e+xDnJwdifUTuD2k1ut0l+murXnZQptU427jEqVOFucv0JjqbbZqNWOT1I43wfg+g0uj0jeO9VSr/Z9C/ViT6med1/F+McRJzzpUeldeQMepnGexK1y2Jnt4rrXpahbStROMj72OnLnrNfxFs1tgtq/nc1jpNNoXvxum/XqXjw3J3UtnB7nMtroUk4Ue7uzMfdUeZJ2nP0ui1VpDEOK85wvU/XpLtU9iE0k4VNgqnIHxkqtN/MdEtZthulDDNmo4jaUTSUWKtfKEdqV5OcjqCRvNvs5wVeJ2aty3h06bwy1oA91jk8oJ74nnFtRSpXZgc5li8U1tNV2notsSu1ibQrkLYTsSVG06IwT47e3B4ttyS37kpP2zj6e57PVcX4Xw3n0nCaVstGQ97+8MjYkHqZ47i/GPAc2aqxtTrHHNXUzbID0LAbAenecTVcUfTswqsLajpkH3a/j5n0nFax7HZ3ZmdyWZmOSxPckzfym+vEfRf39Tgs8XjTBxoXxP8A5Pllmq1Wp1lrW3uXY7b7KqjoqgbASmPMJ0pJLg+dlJzblJ8ilZkzI4ECGyMI4oychCEUAyEIQgIIQhAAhCEACEIQAIQhGIIQhAQQhCAwhCEACEIQAIQhAYQhCIAjihACYMMyIkojTIZhmGIQEGZJXZCGVirA5BU4IPoZHEeBAecHb0XEy5RbWC2jGCdlfHn6zsXXU3qpAVSNyQNyfjPGYm7S6+yrCWZevoD+JZhOpN5R6um18604T5TPc0e03HtNo/s1WuGE2rayoWWquMcodu05L8Z4s1/i6rUW6hsEYvYsuDv7o6CYltR0DowZT5dvQxlldSGAP7iYuCw4s7oWYalDh+xv/jN/euv5Z/rJVcU1d1q1Igwdyx/Co6nacS2tx7y+8BucdcfCVpqLqgwrcrzfe5TjOJn+Hhj4UdsPErozSm+PsepZiSST1OSTIGxB1dR8WAnmGutf7zufixMOfJ3+ExWj9Wel/W/+sf1PSHWKv3Pf7Z/DMF2pttY87HAJwO30nOWxwCASAfInEtBPh+JkY5+TGdycZyJpClVnPfrp6hYXHqaVc46wLnOJnV42cTTB5s55WTQjZOCcTTXqaqUIGS5JJ8vLE51V61uWbcFHXz3IIG0nXW7cpc8o8vxGROGeGdOmudXxQ68/Y1g6jVOAoJ/RV+Jm6vT06cc1nv2dQT6dlEzV3CsBa1AUdvM+uJF7CTksSfjMtr6djtV0I/E/il+ho+1XrnlcqO4B2xMrtkk53O8gz/rM91yVrzO2B+p9BNopHFbdKS+JljEbk7bdek5Or1+c1UHbcNYOp9F/xlOq1dt+VHu1/l7n+9MeJ2Qjjk+e1N+54iQzHHiGJsecGYZixFAWR5izFFAlseYZihGIcIoRAEIQjAIQhAAhCEACEIQAIQhAAhCECQhCEACEIQAIQhAAhCEBhCEIAEcAJICItRbFv5SWDGBJYMWTVV5IYMYElymMLFkryiOBDllgTMkEiyWqirEMGXCuSFRMW4vykV1WWVHKEjzHY/ETpUamu3APuvjcHofhMfgNH4DDz+MmWGdFe6vodPMy3VYyy9OpHl8JOlrBhbDkD8XcfGWWLyYIYEEZBU/vMH8LPSjiyOTn53gWxLbKwPeXp3EoaWmZ7GuhYrzTQQzorklMsxXfGwMwqcHeaUB2xnJ2ikb6dttMmGkXf1gds+kqzzNjzMlGdsWuDXpiMWZXLHlCn8uDvNYPSU0VYXIEuO0yk8s7q63GCySLkYxFz7SssT7vXPlEUYiUkc9k8dCFup5MhRzN+k51httbmc5PbyHwE6BqWVmsb7TWPBw2OU+Gc4pI8s3moeUqav0E0UjndeTGVkCs1NW3lIGpvKXuMZUZMxEjNBrPlIFPSUpHNKllMUtKyHLKyYutojCPBiwYyMNBCEIEhCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQjAjAiyWotkcGPBksR4MWTRVkOWS5ZLlMkFPlFk1VaIASQU+UsVT5S0JJcjWNZSqN5S9KT3lyKvcS5Qshs3jEo8CM6f0mpRLlGeuIsmvlpnPFB64jFDHtOkqDyBlgrXsOsW4uNBy107+UuTTPOmqJ6y1a9xgCRvOiOnRzl0r7ZEuXSnuo+k6Kpv92WgKPwiQ5s6YaeJzPsy+UZ0isMYwPMTpgIfwiTFaHsPpJ3s2/DxR5u/TW0HJBKdiNx85kKc2SPmJ7Dw0IKsoKkYII2M5Wr4VjNml2PU1nv/dMFIl1YeVyecdSp3mzT4PL6SF6kqwZSrrswOxB+EpptNZ6zV/FEzrlGm3PZmjUe6DFpK+dwewO8pssNhmnTua8AAljsANyTJ5UcB5kJ37n0OnhEXfGBK0rtvY8gwg6uenymnT6J7MWas8o6rUDj/uM2t4YAVANhgBQMD4ATGKwd1125YXCMApSsYGc9yepkSuTjE2+E7SS0gdVmmUjg2Sl0Rz/AYnoZL7LntOmK18oEKO4i3IfkSOWdL6SptMN51X5RjeZ3K+cveZvTs5rUJ5SpqsbYHym8qD3kDUDK3GToZzWpz2lZ048p1DT0kGqx2+eZakc8qWjltpxKzpxOmyDylLLv0lKRzyrOaaMSBpM3sDKWBPaVuMXWjGUxIkTQynylZRvKUmZygikiKWFTIlZeTnlWyMI8RRmTTQQhCAghCEACEIQAIQhAAhCEBoBJYiElEaxiMRwEkBmQ2dMUAx5SYxBUlgrHnJLABfKTCqYCsywVnzgVgQQSYSMVHzli1/zRFpCFUtSvpJIhl6rjqJLNYxEqDylvIMSQ5R2EntIOqKZBdu0nlvSG46CPBPYxGi3ImGkhYo6iVgOexj5GPaRg6I2uK6lwsHY4j5yehlS1nP3frL0T+WS4vsbQug+ogz+an47SwXMPwE/AyYr/AJQPnJeF/c+pmeGdG6JEalehVh8jJeNSfxgfH/OLwlHkPrEVr7sPpn94hYT6GfV6PTawH7q2YwHXGT6MO88zq9HqNK55190nZh90/OenbwM7KSe3L/lBqltVketSjbFWOczSM9pjbp1Z7HmdNprbz7g27sfugeZM7mkpo0xzWvNaRg2WY/8AiO01Jp66lVERVX8Ixt8zJclw/wCHUfhkGDnkVdCh9Q+/jmJPw2lgGOi/WQW0rsadx3Bz+8tGoq7jB9f8pmb4fXADmJkuUn/RkhfSfxLLVvr8xBJGcpS9CjlY9M/QxeGT2JPwmnxUIxH4qDsZWELfMyGn+UyH2dT1QzabVkS6ncyiG2+rMZor6BZWaBv2m3nTyMrcoRtKyZOMfUxGvr6dZUyeo+hmpsdpU2POUmZSgvUzNWDKWpP+hNTSlmYy0znlWjI9XWUNX12mxi0qZjuJSkYSrMbJjtKmU+U1Mw8pUW9JaZi4YMrKfKUsCMzaSvlKmwc7SkzJxMZkZoYLKiBKTOeUCuEkQJEyjnccBCEIyAhCEACEIQAIQhAaHJSMYkm0WSEsGZWJIGS0aploJlikykNJhojTcXAmWBjKA0mD3iLUi9WI6yYc+czg5kwYsFb2aFs6bmWCweczLjzli423MMDU2alszLlfvMisO0tDCLBtG01B1li2J3ExgrJg+sWCt7NgtUdJIWZ8pi5oc/rFgan6s3eJv975Q8aYS4+HzgLQO8hpm8Jo2faGHSI6px3HymXn5pHbPcyNp0K5x6M1/aHf/OPBbGWPwEzr6CaFBxJcTWOo9eS9AB2GJYpUmUrgjcmXIF2/rJ2o185stKhh0zKi5Q45TLgyiV2EN0x+0aj6kSs9BhlbqB/WQZUPUSv3wdsSedt+sbgiYallZqXqD9ZU3Mv/APZazGVsSY1WEtW+5DxXHc/WSFzn8X1lbYlRbG0ewj8SjYLLPzCS53/N9RMPMwh4rjuYbWLz49zYbH8xK2sbzmbxj5iRNkMGcrF2NBsMiXmfxJAuD3loxc8mgsp74+UqY+REpZ8d5WbTHgzlJlj83pKWLYMTW+sqawy0YuQmzKjmSL+crLCUkZSkImVMeoki4lZIlYM28kCZAxsZHMpGEhSMcUpGEghCEZmEIQgAQhCABCEIAEYMUIik8EsxgyEcRopFoMkDKcyQMWC1IvDCTDTPzRhosFbjSGklb1mYNJB8Yhge41Zkw+JlFkPEEMBuNwsG0s8QTnhyZYGMRcWbfFx5Ri6ZASZMHERpk0eKxj52mfmj5/rEUpF/Oe5kebeUeJDngXuNi2E7S5SO8wLZ6D6y5bJGDSM/U3Kyy5XXEwLZLFsI7iLGTRWI6KEecsDCYFukvG/1mTtNFcbC/riVG4jO4+szG7brIGwHO8aiS7TSbx2kfH/0ZlLDzkSwxKUTGVjZs8YGR5l85i5zEbDHgjzGay695AkTL4nUkn6w8UeceBeYaS20iWEz+KPOI2A9N4sB5haW9ZA2CUGwys2EwwLzDQbPpIGxfOZy5lZshgXmGk2SBsmcue37yJsMrBPmMvLiQLiUmzMiWjwJ2ZLS4MgzDaVFs95Akx4M3IsYyBMjkxEysGLkMmRzFmErBlKQQhCMgIQhAQQhCABCEIAEIQgAQhCABCEIAEIYhgwKyPJhkxYMIh7iXNHzGRgIFKRPmkgZXJRFplqtiWKxlAMmGk4LTNAYiS5zM/NHzesReS/niLyktFzQwG4v5o+cSjMOaGA3GgPjpLFsMyhpMPFge9moWGS8UzIG26x80B78mwWnzPyj8b1z85i5z5w8SGB7jb4x8xDxTMXMfOHMYYDzDZ4gh4hmTnj5zAW80+JImwTPz+siW9YBuLzZI8/xlBb1kSx84Cci82Dzh4hmbn9Yucx4INBszIlpVzZ8oixgGWWMTKy4kCx3kc+cMC3Ey/SQLkyJzFK2ich80RMUUeCdw8xEwijIch5ihCMjIQhCBIQhCABCEIAEIQgAQluoCrqNUAAAtzqAOgHMdpVAAhCOAxYjjjiDBGPEI4wFDEcIALEeI4QAWI8RiOIZHHpHiOECgxCOMQHkIQhEVuYQ3jEcAyR3j3jhABiOKOIpMeY8xCHeGCgzDMI4YAI8mKEQDzFkwhAB5iMIQAjI5MnEY8CZAiLEmZGBOSOIbxwjIy0LeLElCAZIYixJxRiI4ixJQgIhiGJKEAI4ixJQgIjiEcIwIwjigIIQhAAhCeg09GnajTE1VkmmsklF3JUQA//Z) center / cover'}} >New Golden Dragon</CardTitle>
                    <CardText>
                        Chinese restaurant website that allows online ordering and payments.
                    </CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/mitchellglazier/" rel="noopener noreferrer" target="_blank">Github</a>
                        </Button>
                        {/* <Button colored>CodePen</Button> */}
                        <Button colored>
                        <a href="https://new-winter-dragon.herokuapp.com/" rel="noopener noreferrer" target="_blank">Website</a>
                        </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTabe} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Rails</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

            </div>
        )
    }
}

export default Projects;