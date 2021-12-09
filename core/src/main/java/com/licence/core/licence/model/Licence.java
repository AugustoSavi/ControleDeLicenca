package com.licence.core.licence.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Licence {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", insertable = false, updatable = false, nullable = false)
    private Long id;
    @Column(name = "CHAVE_DE_ACESSO", updatable = false, unique = true, length = 36)
    private String chaveDeAcesso = UUID.randomUUID().toString();
    private String nome;
    private String email;
    private boolean isAtivo;
}

