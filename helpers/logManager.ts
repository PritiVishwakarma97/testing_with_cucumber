/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import { deleteAndCreateNewFile } from "./fileManager";

export class Logger{

    moduleName: string;
    static filePath: string;

    constructor(moduleName: string){
        this.moduleName = moduleName;
    }

    static initializeLogger(logFilePath: string){
        this.filePath = logFilePath;
        deleteAndCreateNewFile(this.filePath);
    }

    private log(level: string, message: string, object?: any){
        let log: string;
        const dateTime = new Date().toLocaleString();

        if(object !== undefined){
            log = `\n[${dateTime}] [${this.moduleName}] [${level}] ${message} - ${object}`;
        }
        else{
            log = `\n[${dateTime}] [${this.moduleName}] [${level}] ${message}`;
        }

        fs.appendFile(Logger.filePath, log, function(err){
            if(err) throw err;
        });
    }

    info(message: string, object?: any){
        if(object!==undefined){
            this.log("INFO", message, object);
        }
        else{
            this.log("INFO", message);
        }
    }

    error(message: string, object?: any){
        if(object!==undefined){
            this.log("ERROR", message, object);
        }
        else{
            this.log("ERROR", message);
        }
    }

    warn(message: string, object?: any){
        if(object!==undefined){
            this.log("WARN", message, object);
        }
        else{
            this.log("WARN", message);
        }
    }

    debug(message: string, object?: any){
        if(object!==undefined){
            this.log("DEBUG", message, object);
        }
        else{
            this.log("DEBUG", message);
        }
    }
}