/**
 * El usuario puede ingresar 5 departamentos de colombia
 * Realizar un pront , porfavor ingresar un departamento, hacer una validacion con los departamentos y dependiendo de cada uno, va mostrar un alert diferente . mostrar 5 pueblos o ciudades de cada uno de departamentos 
 */


 let departamento = prompt("Ingrese alguno de estos departamentos : antioquia, bogota, cali, pasto o quindio");
 let ciudad = "";

 if (departamento === "antioquia") {
    ciudad = prompt("medellin, frontino, copacabana,turbo, bello");
    if (ciudad === "medellin") {
        alert("La ciudad de la dulce primavera");
    } else {
        if (ciudad === "frontino") {
            alert("El mejor municipio del mundo jejejje");
        } else {
            if (ciudad === "copacabana") {
                alert("no lo conozco");
            } else {
                if (ciudad === "turbo") {
                    alert("La puerta al uraba antioqueño");
                } else {
                    if (ciudad === "bello") {
                        alert(" Lo mas bello jajajja");
                    } else {
                        alert("ingreso la ciudad mal");
                    }
                }
            }
        }
    }
 } else {
     if (departamento === "bogota") {
        ciudad = prompt("bosa, chapinero, engativa,fontivon, kennedy");
        if (ciudad === "bosa") {
            alert("ni idea de bosa");
        } else {
            if (ciudad === "chapinero") {
                alert("No conozco chapinero");
            } else {
                if (ciudad === "engativa") {
                    alert("Ni idea de engativa");
                } else {
                    if (ciudad === "fontivon") {
                        alert(" Nada de fontivon");
                    } else {
                        if (ciudad === "kennedy") {
                            alert(" Kennedy no lo conozco");
                        } else {
                            
                        }
                    }
                }
            }
        }
     } else {
         if (departamento === "pasto") {
            ciudad = prompt("tumaco, ipiales,cumbal, pupiales, ricaurte");
            if (ciudad === "tumaco") {
                alert(" ciudad linda");
            } else {
                if (ciudad === "ipiales") {
                    alert("lindos los de ipiales");
                } else {
                    if (ciudad === "cumbal") {
                        alert("ni idea que existia cumbal");
                    } else {
                        if (ciudad === "pupiales") {
                            alert("pupiales ni idea");
                        } else {
                            if (ciudad === "ricaurte") {
                                alert("nunca he escuchado de ricaurte");
                            } else {
                                
                            }
                        }
                    }
                }
            }
         } else {
             if (departamento === "cali") {
                ciudad = prompt("palmira, tulua,buenaaventura, buga, yumbo");
                if (ciudad === "palmira") {
                    alert("nada de palmira");
                } else {
                    if (ciudad === "tulua") {
                        alert("ni idea de tulua");
                    } else {
                        if (ciudad === "buenaaventura") {
                            alert("buenaventura la he escuchado en una canción");
                        } else {
                            if (ciudad === "buga") {
                                alert("he ido a la iglesia del señor de los milagros jejejje");
                            } else {
                                if (ciudad === "yumbo") {
                                    alert("ni idea de yumbo");
                                } else {
                                    
                                }
                            }
                        }
                    }
                }
             } else {
                 if (departamento === "quindio") {
                    ciudad = prompt("armenia, calarca,circasia, filandia, genova");
                    if (ciudad === "armenia") {
                        alert("conoci a panaca en armenia creo");
                    } else {
                        if (ciudad === "calarca") {
                            alert("ni idea calarca");
                        } else {
                            if (ciudad === "circasia") {
                                alert("nunca he eschado de circasia");
                            } else {
                                if (ciudad === "filandia") {
                                    alert("ni idea de filandia");
                                } else {
                                    if (ciudad === "genova") {
                                        alert("genova jejejje ni idea");
                                    } else {
                                        
                                    }
                                }
                            }
                        }
                    }
                 } else {
                     alert("Por favor ingresar los departamentos validos");
                 }
             }
         }
     }
 }