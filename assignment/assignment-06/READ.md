# '지원 조' 화이팅!_! by dev.chooble

## 1. 설명

### 1-1. 가상환경 (Virtual Environment)
- Python과 Django는 다양하 모듈을 제공하고 있으며, 기본 모듈을 제외한 추가적인 모듈은 pip install 명령어를 통해 설치해서 사용해야 한다.
- 가상환경을 켜놓고 모듈을 설치하면, 모듈은 가상환경 내에서만 사용할 수 있다.
<br/>`$ virtualenv myvenv` 가상환경 생성
<br/>`$ source myvenv/bin/activate` 가상환경 켜기
<br/>`$ django-admin startproject session06` 가상환경 킨 상태로 프로젝트 생성
<br/>`$ pip install django` session06 폴더로 들어간 뒤, 가상환경 내에서 django를 다시 한 번 설치해줌
<br/>`$ python manage.py runserver` <strong>manage.py<strong/>가 존재하는 위치에서 서버를 켜줌
<img width="700" alt="스크린샷 2022-05-24 오후 12 34 52" src="https://user-images.githubusercontent.com/81007078/169943564-6f8e367b-65be-4a00-b785-91b1371dd3e7.png">

### 1-2. Django Server 구축
- 본격적으로 Server를 구축해보자.
<br/>`$ django-admin startapp footprint` <b>footprint<b/>라는 Django에서 프로젝트 하위에서 기능별로 구분하는 단위인 app을 생성
- django project 설정파일인 settings.py에 생성한 app을 등록
<br/> <img width="437" alt="스크린샷 2022-05-24 오후 12 38 51" src="https://user-images.githubusercontent.com/81007078/169944017-5e81223a-415a-4f4b-b959-943c6d710015.png">
- footprint 폴더의 urls.py에 footprint views 함수를 연결
<br/> <img width="503" alt="스크린샷 2022-05-24 오후 12 40 33" src="https://user-images.githubusercontent.com/81007078/169944180-c0a4fc38-659a-45b1-956e-f8618bdbc5f7.png">
- footprint 폴더의 views.py에 footprint_GET, footprint_POST 함수 정의
<br /> <img width="486" alt="스크린샷 2022-05-24 오후 12 41 44" src="https://user-images.githubusercontent.com/81007078/169944292-4b5ba95f-4ee2-46dc-9744-8a74f4b8538f.png">
- footprint 폴더의 models.py에 Footprint Database 모델 정의
<br /><img width="747" alt="스크린샷 2022-05-24 오후 12 42 29" src="https://user-images.githubusercontent.com/81007078/169944358-5b5c1719-3aaa-4eb2-9777-2a387bc7103a.png">
<br/>`$ python manage.py makemigrations`
<br/>`$ python manage.py migrate` 명령어를 순차적으로 실행
- views.py/footprint_GET 함수 & POST 함수
<br/><img width="900" alt="스크린샷 2022-05-24 오후 12 44 25" src="https://user-images.githubusercontent.com/81007078/169944555-bfdbebb2-8e2e-4146-bbaf-b9798f96831b.png">

## 2. 결과물
<img width="906" alt="스크린샷 2022-05-24 오후 12 45 35" src="https://user-images.githubusercontent.com/81007078/169944682-597b1191-124c-443d-85fc-def349319dff.png">
