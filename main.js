const d = document,
    ls = localStorage;
let RecargaPagina = Math.round(new Date().getTime() / 1000); //aqui van los segundos donde se carga la pagina, se usaran para reanudar en conteo del cronometro


function Cronometro0(btnPlay, btnDetener, dias, horas, minutos, segundos ) {
    let DetenerReloj,
        BotonSegundo;
    d.addEventListener("click", (e) => {
        
        if (e.target.matches(btnPlay)) {
            HoraPrecionoBoton();
            let $Dias = 0,
                $Horas = 0,
                $Minutos = 0,
                $Segundos = 0;
            
            e.target.disabled = true;

            DetenerReloj = setInterval(() => {
                if ($Segundos == 60) {
                    $Segundos = 00;
                    $Minutos++;
                    d.querySelector(minutos).innerHTML = `${$Minutos} <p>Minutos</p>`;
                        if ($Minutos==60) {
                            $Minutos = 00;
                            $Horas++;
                            d.querySelector(horas).innerHTML = `${$Horas} <p>Horas</p>`;
                            if ($Horas==24) {
                                $Horas = 00;
                                $Dias++;
                                d.querySelector(dias).innerHTML = `${$Dias} <p>Dias</p>`;

                                if ($Dias<=9) {
                                    d.querySelector(dias).innerHTML = `0${$Dias} <p>Dias</p>`;
                                }
                                if ($Dias>=10) {
                                    d.querySelector(dias).innerHTML = `${$Dias} <p>Dias</p>`;
                                }
                            }

                            if ($Horas<=9) {
                                d.querySelector(horas).innerHTML = `0${$Horas} <p>Horas</p>`;
                            }
                            if ($Horas>=10) {
                                d.querySelector(horas).innerHTML = `${$Horas} <p>Horas</p>`;
                            }
                        }
                        if ($Minutos<=9) {
                            d.querySelector(minutos).innerHTML = `0${$Minutos} <p>Minutos</p>`;
                        }
                        if ($Minutos>=10) {
                            d.querySelector(minutos).innerHTML = `${$Minutos} <p>Minutos</p>`;
                        }

                }
                if ($Segundos<=9) {
                    d.querySelector(segundos).innerHTML = `0${$Segundos} <p>Segundos</p>`;
                }
                if ($Segundos>=10) {
                    d.querySelector(segundos).innerHTML = `${$Segundos} <p>Segundos</p>`;
                }
                $Segundos++;
            }, 1000);
        }

        if (e.target.matches(btnDetener)) {
            clearInterval(DetenerReloj);
            console.log("Detener");

            //Elimina la var de localStorage que tiene el tiempo
            ls.removeItem("Segundo");
        }
        function HoraPrecionoBoton() {
            BotonSegundo = Math.round(new Date().getTime() / 1000);
            console.log("Segundo", BotonSegundo);
            ls.setItem("Segundo", `${BotonSegundo}`);
        }
    });
}

function Cronometro1(btnPlay, btnDetener, dias, horas, minutos, segundos ) {
    let $Dias=00,
        $Horas=00,
        $Minutos=00,
        $Segundos=00,
        DetenerReloj;
        
                TiempoTranscurrido = parseInt(ls.getItem("Segundo")),//aqui viene el tiempo desde que se hizo click
                
                ActualizarContador = (RecargaPagina-TiempoTranscurrido); 
            console.log(TiempoTranscurrido);
            console.log(RecargaPagina);
            console.log(ActualizarContador);

            //IF de Dias
            //Cuenta los segundos y en cada if si cumple los segundos requeridos entra si no ya no;
            if (ActualizarContador >= 86400) {
                let DiasEnSegundos = Math.floor(ActualizarContador / 86400);
                $Dias = (0 + DiasEnSegundos);
                d.querySelector(dias).innerHTML = `${$Dias} <p>Dias</p>`;
                console.log("Dias", DiasEnSegundos);
                ActualizarContador =(ActualizarContador - (86400 * DiasEnSegundos));
                if (ActualizarContador >= 3600) {
                    let HorasEnSegundos = Math.floor(ActualizarContador / 3600);
                    $Horas = (0 + HorasEnSegundos);
                    d.querySelector(horas).innerHTML = `${$Horas} <p>Horas</p>`;
                    console.log("Horas", HorasEnSegundos);
                    ActualizarContador =(ActualizarContador - (3600 * HorasEnSegundos));
                    if (ActualizarContador >= 60) {
                        let MinutosEnSegundos = Math.floor(ActualizarContador / 60);
                        $Minutos = (0 + MinutosEnSegundos);
                        d.querySelector(minutos).innerHTML = `${$Minutos} <p>Minutos</p>`;
                        console.log("Minutos", MinutosEnSegundos);
                        ActualizarContador= (ActualizarContador - (60 * MinutosEnSegundos));
                        if (ActualizarContador<=59) {
                            let SegundosEnSegundos = Math.floor(ActualizarContador / 1);
                            $Segundos = (0 + SegundosEnSegundos);
                            d.querySelector(segundos).innerHTML = `${$Segundos} <p>Segundos</p>`;
                            console.log("Segundos", SegundosEnSegundos);
                            ActualizarContador = (ActualizarContador - (1 * SegundosEnSegundos));
                        }
                    }
                }
            }

            //IF DE HORAS
            if (ActualizarContador >= 3600) {
                let HorasEnSegundos = Math.floor(ActualizarContador / 3600);
                $Horas = (0 + HorasEnSegundos);
                d.querySelector(horas).innerHTML = `${$Horas} <p>Horas</p>`;
                console.log("Horas", HorasEnSegundos);
                ActualizarContador =(ActualizarContador - (3600 * HorasEnSegundos));
                if (ActualizarContador >= 60) {
                    let MinutosEnSegundos = Math.floor(ActualizarContador / 60);
                    $Minutos = (0 + MinutosEnSegundos);
                    d.querySelector(minutos).innerHTML = `${$Minutos} <p>Minutos</p>`;
                    console.log("Minutos", MinutosEnSegundos);
                    ActualizarContador= (ActualizarContador - (60 * MinutosEnSegundos));
                    if (ActualizarContador<=59) {
                        let SegundosEnSegundos = Math.floor(ActualizarContador / 1);
                        $Segundos = (0 + SegundosEnSegundos);
                        d.querySelector(segundos).innerHTML = `${$Segundos} <p>Segundos</p>`;
                        console.log("Segundos", SegundosEnSegundos);
                        ActualizarContador = (ActualizarContador - (1 * SegundosEnSegundos));
                    }
                }
            }

            //IF de minutos
            if (ActualizarContador >= 60) {
                let MinutosEnSegundos = Math.floor(ActualizarContador / 60);
                $Minutos = (0 + MinutosEnSegundos);
                d.querySelector(minutos).innerHTML = `${$Minutos} <p>Minutos</p>`;
                console.log("Minutos", MinutosEnSegundos);
                console.log($Minutos);
                ActualizarContador= (ActualizarContador - (60 * MinutosEnSegundos));

                if (ActualizarContador<=59) {
                    let SegundosEnSegundos = Math.floor(ActualizarContador / 1);
                    $Segundos = (0 + SegundosEnSegundos);
                    d.querySelector(segundos).innerHTML = `${$Segundos} <p>Segundos</p>`;
                    ActualizarContador = (ActualizarContador - (1 * SegundosEnSegundos));
                }
            }

            //if de segundos
            if (ActualizarContador<=59&& ActualizarContador>0) {
                let SegundosEnSegundos = Math.floor(ActualizarContador / 1);
                $Segundos = (0 + SegundosEnSegundos);
                d.querySelector(segundos).innerHTML = `${$Segundos} <p>Segundos</p>`;
                ActualizarContador = (ActualizarContador - (1 * SegundosEnSegundos));
            }
                DetenerReloj = setInterval(() => {
                    if ($Segundos == 60) {
                        $Segundos = 00;
                        $Minutos++;
                        d.querySelector(minutos).innerHTML = `${$Minutos} <p>Minutos</p>`;
                            if ($Minutos==60) {
                                $Minutos = 00;
                                $Horas++;
                                d.querySelector(horas).innerHTML = `${$Horas} <p>Horas</p>`;
                                if ($Horas==24) {
                                    $Horas = 00;
                                    $Dias++;
                                    d.querySelector(dias).innerHTML = `${$Dias} <p>Dias</p>`;
    
                                    if ($Dias<=9) {
                                        d.querySelector(dias).innerHTML = `0${$Dias} <p>Dias</p>`;
                                    }
                                    if ($Dias>=10) {
                                        d.querySelector(dias).innerHTML = `${$Dias} <p>Dias</p>`;
                                    }
                                }
    
                                if ($Horas<=9) {
                                    d.querySelector(horas).innerHTML = `0${$Horas} <p>Horas</p>`;
                                }
                                if ($Horas>=10) {
                                    d.querySelector(horas).innerHTML = `${$Horas} <p>Horas</p>`;
                                }
                            }
                            if ($Minutos<=9) {
                                d.querySelector(minutos).innerHTML = `0${$Minutos} <p>Minutos</p>`;
                            }
                            if ($Minutos>=10) {
                                d.querySelector(minutos).innerHTML = `${$Minutos} <p>Minutos</p>`;
                            }
    
                    }
                    if ($Segundos<=9) {
                        d.querySelector(segundos).innerHTML = `0${$Segundos} <p>Segundos</p>`;
                    }
                    if ($Segundos>=10) {
                        d.querySelector(segundos).innerHTML = `${$Segundos} <p>Segundos</p>`;
                    }
                    $Segundos++;
                }, 1000);
        

        if (e.target.matches(btnDetener)) {
            clearInterval(DetenerReloj);
            console.log("Detener");

            //Elimina la var de localStorage que tiene el tiempo
            ls.removeItem("Segundo");
        }

    
}

function FechaRecargaPagina() {
    let FechaRecargoPagina = new Date().toLocaleDateString();
    console.log("fecha en que se carga pagina: ", FechaRecargoPagina);

    let HoraRecargoPagina = new Date().toLocaleTimeString();
    console.log("fecha en que se carga pagina: ", HoraRecargoPagina);
    console.log(" ");
}



d.addEventListener("DOMContentLoaded", (e) => {
    FechaRecargaPagina();
    if (ls.getItem("Segundo") == null) {
        console.log("Local Storage vacio");
        //cronometro trabaja con los numeros en 0, inicia el conteo desde 0
        Cronometro0(".iniciar", ".detener", ".dias", ".horas", ".minutos", ".segundos");
    }else{
        console.log("Segundos no esta vacio");
        //cronometro2 trabaja con datos del localstorage, reanuda el conteo desde donde salio la persona
        Cronometro1(".iniciar", ".detener", ".dias", ".horas", ".minutos", ".segundos");
    }
});