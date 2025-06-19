# Aplicativo Educacional de Física: Temperatura e Radiação

Um aplicativo móvel educacional que combina duas importantes funcionalidades da física térmica e óptica:
1. Medição da Temperatura pela Cor
2. Simulação da Radiação de Corpo Negro

## Como Funciona

### 1. Medição da Temperatura pela Cor

Esta funcionalidade utiliza princípios da física da luz e cor para estimar temperaturas.

#### Princípio Científico:
- Quando um objeto é aquecido, ele emite radiação eletromagnética
- A cor predominante dessa radiação está relacionada com a temperatura do objeto
- Esta relação é descrita pela Lei de Wien: λ_pico = b/T
  - λ_pico: comprimento de onda do pico de emissão (metros)
  - b: constante de Wien (2,898 × 10⁻³ m·K)
  - T: temperatura absoluta (Kelvin)

#### Processo no App:
1. A câmera captura uma imagem do objeto
2. O app calcula a cor média (RGB) da imagem
3. Esta cor é convertida em comprimento de onda aproximado
4. Usando a Lei de Wien, calculamos a temperatura estimada

#### Limitações e Considerações:
- A estimativa é aproximada e depende de vários fatores:
  - Iluminação ambiente
  - Qualidade da câmera
  - Propriedades do material do objeto
- Melhor precisão para objetos muito quentes (> 800K)
- Útil para fins educacionais e demonstrativos

### 2. Simulação da Radiação de Corpo Negro

Esta funcionalidade simula como objetos emitem radiação em diferentes temperaturas.

#### Princípio Científico:
- Um corpo negro é um objeto teórico que:
  - Absorve toda radiação que incide sobre ele
  - Emite radiação em um espectro característico
- A distribuição da radiação depende apenas da temperatura
- O pico de emissão segue a Lei de Wien

#### Processo no App:
1. Usuário insere uma temperatura em Kelvin
2. O app calcula:
   - Comprimento de onda do pico (Lei de Wien)
   - Distribuição espectral simplificada
3. Exibe resultados em gráfico colorido
   - Cores representam diferentes comprimentos de onda
   - Altura das barras indica intensidade relativa

#### Aplicações Educacionais:
- Visualizar como a radiação muda com a temperatura
- Entender o espectro visível e cores
- Relacionar temperatura com emissão de luz

## Uso em Sala de Aula

### Experimentos Sugeridos:

1. **Temperatura e Cor**
   - Compare diferentes objetos aquecidos
   - Observe mudança de cor em metais aquecidos
   - Relacione com fenômenos cotidianos (lâmpadas, fogo)

2. **Radiação de Corpo Negro**
   - Explore diferentes temperaturas
   - Compare com objetos reais (Sol, lâmpadas)
   - Discuta energia e espectro eletromagnético

### Conceitos Abordados:
- Temperatura e calor
- Radiação eletromagnética
- Espectro visível
- Lei de Wien
- Física moderna (introdução)

## Instalação e Uso

### Requisitos:
- Dispositivo móvel com câmera
- Sistema operacional:
  - Android 6.0 ou superior
  - iOS 13.0 ou superior

### Instalação:
1. Baixe o app da loja (Google Play ou App Store)
2. Conceda permissão de acesso à câmera quando solicitado

### Desenvolvimento Local:
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/scientific-mobile-app.git

# Instale as dependências
cd scientific-mobile-app
npm install

# Inicie o app
npm start
```

## Notas Técnicas

### Cálculo da Temperatura pela Cor:
O app usa uma aproximação baseada na cor dominante:
1. Extrai valores RGB da imagem
2. Converte RGB para comprimento de onda aproximado
3. Aplica a Lei de Wien para estimar a temperatura

### Simulação do Corpo Negro:
- Implementa uma versão simplificada da Lei de Planck
- Foca no espectro visível (380-780nm)
- Usa 10 pontos para representar a distribuição

## Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

## Licença

Este projeto está licenciado sob a MIT License - veja [LICENSE.md](LICENSE.md) para detalhes.

## Agradecimentos

- Desenvolvido para fins educacionais
- Baseado em princípios da física térmica e óptica
- Inspirado por experimentos clássicos de física moderna
