# Yarn berry

npm을 사용하지 않고 yarn berry의 pnp 방식을 사용했습니다.
무겁고 복잡한 node_modules 파일과 비효율적인 의존성검색, 중복설치, 유령의존성 등을
해결하기 위해 선택했습니다.
pnp 방식은 zero install을 통해 CI 시간을 단축해줍니다.
