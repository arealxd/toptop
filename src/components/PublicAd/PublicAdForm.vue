<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { vMaska } from 'maska/vue'
import AButton from '@/components/UI/AButton.vue'

const router = useRouter()
const route = useRoute()
const pageType = ref<'edit' | 'create'>('create')
const selectedCategory = ref('')
const selectedCity = ref('')
const adType = ref<'sale' | 'rent'>('sale')
const price = ref('')
const isFree = ref(false)
const productName = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const photoList = ref<string[]>([])
const photoFiles = ref<File[]>([])
const description = ref('')
const stateType = ref<'new' | 'used'>('new')
const selectedType = ref('')
const email = ref('')
const name = ref('')
const phone = ref('')
const secondPhone = ref('')
const showSecondPhone = ref(false)
const selectedPeriod = ref('')

const toggleSecondPhone = () => {
  showSecondPhone.value = !showSecondPhone.value
}

if (route.query.type) {
  if (route.query.type === 'edit') {
    pageType.value = route.query.type as 'edit'
  } else {
    pageType.value = 'create'
  }
}

const categories = ref([
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  { id: 3, name: 'Category 3' }
])

const cities = ref([
  { id: 1, name: 'City 1' },
  { id: 2, name: 'City 2' },
  { id: 3, name: 'City 3' }
])

const types = ref([
  { id: 1, name: 'Type 1' },
  { id: 2, name: 'Type 2' },
  { id: 3, name: 'Type 3' }
])

const periods = ref([
  { id: 1, name: 'Period 1' },
  { id: 2, name: 'Period 2' },
  { id: 3, name: 'Period 3' }
])

const changeAdType = (type: 'sale' | 'rent') => {
  adType.value = type
}

const changeStateType = (type: 'new' | 'used') => {
  stateType.value = type
}

const triggerUploadAvatar = () => {
  if (fileInput.value) {
    fileInput.value?.click()
  }
}

const uploadFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    photoList.value.push(URL.createObjectURL(file))
    photoFiles.value.push(file)
  }
}

const deletePhoto = (index: number) => {
  photoList.value.splice(index, 1)
  photoFiles.value.splice(index, 1)
}

watch(isFree, (value) => {
  if (value) {
    price.value = ''
  }
})

const submitForm = () => {
  console.log('submit')
}
</script>

<template>
  <form @submit.prevent="submitForm" class="public-ad">
    <div class="public-ad__main">
      <div class="select-item">
        <p class="title">Категория</p>
        <select class="select" required v-model="selectedCategory">
          <option value="" disabled selected>Выберите категорию</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="select-item">
        <p class="title">Город</p>
        <select class="select" required v-model="selectedCity">
          <option value="" disabled selected>Выберите город</option>
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>
      <div class="ad-type">
        <p class="title">Тип объявления</p>
        <div class="types">
          <AButton
            title="Продажа"
            @click="changeAdType('sale')"
            :type="adType === 'sale' ? 'colored' : 'outlined'"
          />
          <AButton
            title="Аренда"
            @click="changeAdType('rent')"
            :type="adType === 'rent' ? 'colored' : 'outlined'"
          />
        </div>
      </div>
      <div class="price">
        <div class="select-item" :class="{ disabled: isFree && adType === 'sale' }">
          <p class="title">Цена (₸)</p>
          <input
            v-model="price"
            v-maska="'########'"
            :placeholder="
              adType === 'sale' ? 'Напишите цену или выберите пункт бесплатно' : 'Напишите цену'
            "
            :disabled="isFree"
            :required="!isFree"
            class="input"
            type="text"
          />
        </div>
        <div v-if="adType === 'sale'" class="checkbox-item">
          <input v-model="isFree" class="input-checkbox" type="checkbox" id="free" />
          <label class="label" for="free">Бесплатно</label>
        </div>
        <div v-else class="select-item">
          <p class="title">Период</p>
          <select class="select" required v-model="selectedPeriod">
            <option value="" disabled selected>Выберите период</option>
            <option v-for="period in periods" :key="period.id" :value="period.id">
              {{ period.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="select-item item-name">
      <p class="title">Название товара</p>
      <input v-model="productName" placeholder="Название товара" class="input" type="text" />
    </div>
    <div class="photos">
      <p class="title">Фотографии</p>
      <div class="photos__list">
        <div class="photos__list--item" v-for="(photo, index) in photoList" :key="index">
          <img :src="photo" alt="photo" />
          <img @click="deletePhoto(index)" src="/icons/delete-v2.svg" class="delete" alt="delete" />
        </div>
        <div class="upload-photo" @click="triggerUploadAvatar">
          <img src="/icons/upload-file.svg" alt="upload" />
          <p class="title">Загрузите фото</p>
        </div>
        <input
          @change="uploadFile"
          class="input-file"
          type="file"
          style="display: none"
          ref="fileInput"
          accept="image/*"
        />
      </div>
    </div>
    <div class="select-item description">
      <p class="title">Описание товара</p>
      <textarea
        v-model="description"
        placeholder="Описание товара"
        class="input"
        rows="5"
        style="resize: none"
      ></textarea>
    </div>
    <div class="chars">
      <p class="chars__title">Характеристики</p>
      <div class="list">
        <div class="state">
          <p class="title">Состояние</p>
          <div class="types">
            <AButton
              title="Новое"
              @click="changeStateType('new')"
              :type="stateType === 'new' ? 'colored' : 'outlined'"
            />
            <AButton
              title="Б/у"
              @click="changeStateType('used')"
              :type="stateType === 'used' ? 'colored' : 'outlined'"
            />
          </div>
        </div>
        <div class="select-item">
          <p class="title">Тип</p>
          <select class="select" v-model="selectedType">
            <option value="" disabled selected>Выберите тип</option>
            <option v-for="type in types" :key="type.id" :value="type.id">
              {{ type.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="contacts">
      <div class="select-item">
        <p class="title">Email</p>
        <input v-model="email" placeholder="Email" class="input" type="email" />
      </div>
      <div class="select-item">
        <p class="title">Ваше имя</p>
        <input v-model="name" placeholder="Ваше имя" class="input" type="text" />
      </div>
      <div class="contacts__phones">
        <div class="select-item">
          <p class="title">Номер телефона</p>
          <input
            v-model="phone"
            v-maska="'+7 ### ### ## ##'"
            placeholder="Номер телефона"
            class="input"
            type="text"
          />
        </div>
        <div v-if="showSecondPhone" class="select-item">
          <p class="title">Дополнительный номер</p>
          <input
            v-model="secondPhone"
            v-maska="'+7 ### ### ## ##'"
            placeholder="Дополнительный номер"
            class="input"
            type="text"
          />
        </div>
        <AButton
          @click="toggleSecondPhone"
          :title="showSecondPhone ? 'Убрать второй номер' : 'Добавить еще номер'"
          type="outlined"
        />
      </div>
    </div>
    <div v-if="pageType === 'edit'" class="submit">
      <AButton button-type="submit" title="Сохранить" background="#23B354" />
      <AButton @click="router.push('/my-ads')" title="Отменить" type="outlined" />
    </div>
    <div v-else class="submit">
      <AButton button-type="submit" title="Опубликовать" />
      <AButton title="Предпросмотр" type="outlined" />
    </div>
  </form>
</template>

<style scoped lang="scss">
.public-ad {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  .disabled {
    opacity: 0.5;
  }
  &__main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 48px;
    row-gap: 34px;
    margin-bottom: 48px;
  }
  .select-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      color: #5e6366;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .select {
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      outline: none;
      padding: 14px 16px;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      background-size: 24px;
      background: #fff url('/icons/arrow-select-27.svg') no-repeat calc(100% - 16px) center;
    }
    .input {
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      background: #fff;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 13.75px 16px;
    }
  }
  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 20px;
    .input-checkbox {
      min-width: 20px;
      min-height: 20px;
      border-radius: 4px;
      border: 1px solid #ababab;
      cursor: pointer;
    }
    .label {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      cursor: pointer;
    }
  }
  .ad-type {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .title {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .types {
      display: flex;
      align-items: center;
      gap: 11px;
      button {
        max-width: 205px;
      }
    }
  }
  .price {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  .photos {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 32px;
    margin-bottom: 40px;
    .title {
      color: #303030;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, 153px);
      gap: 24px;
      &--item {
        position: relative;
        img {
          width: 153px;
          height: 121px;
          object-fit: cover;
          border-radius: 8px;
        }
        .delete {
          background: #fce8cb;
          padding: 5px;
          width: 30px;
          height: 30px;
          position: absolute;
          top: 8px;
          right: 8px;
          cursor: pointer;
        }
      }
    }
    .upload-photo {
      width: 153px;
      height: 121px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      border-radius: 8px;
      background: #fce8cb;
      cursor: pointer;
      &:hover {
        background: #f9e8d4;
      }
      img {
        width: fit-content;
      }
      .title {
        color: #ff5100;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
  .chars {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 32px 0;
    margin: 32px 0;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    &__title {
      color: #303030;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 48px;
      row-gap: 34px;
      .state {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .title {
          color: #000;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .types {
          display: flex;
          gap: 11px;
          button {
            max-width: 205px;
          }
        }
      }
    }
  }
  .contacts {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 48px;
    row-gap: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #d9d9d9;
    &__phones {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
  .submit {
    display: flex;
    gap: 16px;
    margin-top: 50px;
    margin-bottom: 70px;
    margin-left: auto;
    button {
      min-width: 309px;
    }
  }
}
</style>
