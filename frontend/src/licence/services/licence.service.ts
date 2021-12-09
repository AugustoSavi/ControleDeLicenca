import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/RX";
import { API_CONFIG } from "../../config/api.config";
import { LicenceDTO } from "../models/licence.dto";

@Injectable()
export class LicenceService {
    constructor(
        public http: HttpClient
    ){}

    findAll(): Observable<LicenceDTO[]> {
        return this.http.get<LicenceDTO[]>(`${API_CONFIG.baseUrl}/licence`);
    }

    save(licence: LicenceDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/licence`, licence, {
            observe: 'response'
        });
    }

    delete(id: String){
        return this.http.delete(`${API_CONFIG.baseUrl}/licence/${id}`, {
            observe: 'response'
        });
    }
}