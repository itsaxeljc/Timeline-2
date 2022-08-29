import React from 'react';
import styles from "./MainContainer.module.scss";
import {Card} from "../Card/Card";

//Images
import HTML from "../../assets/img/HTML.png";
import CSS from "../../assets/img/CSS.png";
import JS from "../../assets/img/JS.png";
import ANDROID from "../../assets/img/ANDROID.png";
import IOS from "../../assets/img/IOS.png";
import PHONEGAP from "../../assets/img/PHONEGAP.png";
import ANGULAR from "../../assets/img/ANGULAR.png";
import WINDOWS from "../../assets/img/WINDOWS.png";
import XAMARIN from "../../assets/img/XAMARIN.png";
import CORDOVA from "../../assets/img/CORDOVA.png";
import REACT from "../../assets/img/REACT.png";
import IONIC from "../../assets/img/IONIC.png";
import SWIFT from "../../assets/img/SWIFT.png";
import REACTNATIVE from "../../assets/img/REACTNATIVE.png";
import FLUTTER from "../../assets/img/FLUTTER.png";


export function MainContainer(props) {


    return (
        <div className={styles.scroll}>
            <div className={styles.innerContainer}>
                <Card fecha="1991" par="Tim Berners-Lee investigador de la Organización Europea para la Investigación Nucler propone un nuevo sistema de hipertexto para compartir documentos, hoy conocido como HTML."
                coverTitle="HTML HTML" photo={HTML} title="HTML"
                ></Card>
                <Card fecha="1994" par="Mientras Håkon Wium Lie trabajaba en CERN con Tim Berners-Lee crea CSS en un intento por estandarizar las hojas de estilo para la World Wide Web. En 1996 el W3C pública el primer estándar para CSS."
                coverTitle="CSSCSS CSSCSS" photo={CSS} title="CSS"
                ></Card>
                <Card fecha="1995" par="Brenan Eich escribe en tan solo diez días la primera versión de JavaScript, un lenguaje de programación que buscaba ejecutarse en el navegador de Netscape. Dio inicio a la Web interactiva."
                coverTitle="JAVA SCRIPT" photo={JS} title="JavaScript"
                ></Card>
                <Card fecha="2003" par="Rich Miner, Nick Sears, Chris White y Andy Rubin fundan Android Inc. buscaban desarrollar dispositivos móviles más inteligentes, enfocados originalmente a mejorar los sistemas de cámaras digitales. En 2007 se lanza oficialmente Android con la salida del HTC Dream."
                coverTitle="ANDROID ANDROID" photo={ANDROID} title="Android"
                style={{fontSize: '100px'}}
                ></Card>
                <Card fecha="2007" par="Apple lanza la primera versión iOS durante la presentación del primer iPhone. Destacaba por funcionalidades como multitouch, búsqueda en Internet con Safari y una app para YouTube. En 2008 se presenta App Store popularizando las tiendas de apps móviles."
                coverTitle="iOS iOSiOS" photo={IOS} title="iOS"
                ></Card>
                <Card fecha="2008" par="En 2008 la desconocida Nitobi Software crea PhoneGap un framewok open source basado en HTML5, JavaScript y CSS3 que permitía desarrollar aplicaciones compatibles con todos los sistemas operativos móviles. Adobe compra Nitobi en 2011 y PhoneGap se integra a Apache."
                coverTitle="PhoneGap PhoneGap" photo={PHONEGAP} title="PhoneGap"
                style={{fontSize: '100px'}}
                ></Card>
                <Card fecha="2010" par="Miško Hevery comenzó a desarrolla AngularJS en 2009, originalmente un servicio de almacenamiento online de archivos JSON. En 2010 es lanzado por Google ahora como un framework. En 2016 se relanza como Angular 2, una versión reescrita del antiguo Angular."
                coverTitle="ANGULAR ANGULAR" photo={ANGULAR} title="Angular"
                style={{fontSize: '100px'}}
                ></Card>
                <Card fecha="2010" par="Microsoft lanza Windows Phone para reemplazar al obsoleto Windows Mobile dejando atrás al mercado empresarial y abriendose al mercado del consumo, se diferenciaba bastante de iOS y Android, sin embargo desde 2017 Microsoft dejó de darle soprte."
                coverTitle="WINDOWS PHONE" photo={WINDOWS} title="Windows Phone"
                style={{fontSize: '100px'}}
                ></Card>
                <Card fecha="2011" par="Xamarin inició como un experimento para probar y desarrollar una versión de .NET en Linux a los inicios de los 2000. En 2011 Nat Friedman, Miguel de Icaza y Joseph Hill fundan Xamarin, permitiendo desarrollar aplicaciones nativas para Android, iOS y Windows a través de C#."
                coverTitle="XAMARIN XAMARIN" photo={XAMARIN} title="Xamarin"
                style={{fontSize: '100px'}}
                ></Card>
                <Card fecha="2011" par="Con la compra de la compañía de software Nitobi, PhoneGap pasó a formar parte de la suit de Adobe, sin embargo en el lanzamiento de PhoneGap 1.4, Adobe lanza la versión OpenSource de este mismo proyecto y lo llama Cordova. En 2020 Adobe deja de dar soporte a PhoneGap."
                coverTitle="CORDOVA CORDOVA" photo={CORDOVA} title="Cordova"
                style={{fontSize: '100px'}}
                ></Card>
                <Card fecha="2013" par="Jordan Walke un ingeniero de Facebook lanza el primer prototipo de React llamado “FaxJS” influenciado por XHP una biblioteca de componentes para PHP. React fue utilizado por primera vez en el feed de noticias de Facebook y se hizo open source en 2013."
                coverTitle="REACT REACT" photo={REACT} title="React"
                ></Card>
                <Card fecha="2013" par="Drifty Co. publica la primera versión de Ionic, construida sobre AngularJS y Cordova por Max Lynch, Ben Sperry y Adam Bradley quienes buscaban facilitar la creación aplicaciones híbridas a través de un SDK completo y de código abierto."
                coverTitle="IONIC IONIC" photo={IONIC} title="Ionic"
                ></Card>
                <Card fecha="2014" par="En 2010 Chris Lattner y otros programadores comienzan a desarrollar Swift un lenguaje de programación para el desarrollo de apps nativas para iOS basado en lenguajes como Objective-C y Rust. No fue hasta la WWDC de 2014 que Apple presenta Swift."
                coverTitle="SWIFT SWIFT" photo={SWIFT} title="Swift"
                ></Card>
                <Card fecha="2015" par="En 2012 Christopher Chedeau se une a Jordan Walke (el creador de ReactJS) para construir un prototipo que permitiera desarrollar aplicaciones que utilizaran componentes nativos a través de JavaScript. No fue hasta 2015 que Facebook lanza React Native como open source."
                coverTitle="REACT NATIVE" photo={REACTNATIVE} title="React Native"
                ></Card>
                <Card fecha="2017" par="En 2015 Google presenta Flutter, un framework que buscaba el desarrollo de aplicaciones híbridas con rendimiento nativo a través del uso del lenguaje de programación Dart. Google lanzó Flutter hasta 2018."
                coverTitle="FLUTTER FLUTTER" photo={FLUTTER} title="Flutter"
                style={{fontSize: '100px'}}
                ></Card>
            </div>
            
        </div>
    );

};