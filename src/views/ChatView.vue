<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

window.scrollTo(0, 0)

const router = useRouter()
const route = useRoute()
const chatType = ref<'support' | 'chat'>('support')
const isOnline = ref(true)
const fileInput = ref<HTMLInputElement | null>(null)
const loadedFile = ref<File | null>(null)
const showUploadFile = ref<string | null>(null)
const chatId = ref<number>(1)
const message = ref<string>('')

const setChatId = (id: number) => {
  chatId.value = id
}

const sendMessage = () => {
  message.value = ''
  deleteFile()
}

if (route.query.type === 'chat') {
  chatType.value = 'chat'
} else {
  chatType.value = 'support'
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
    showUploadFile.value = URL.createObjectURL(file)
    loadedFile.value = file
  }
}

const deleteFile = () => {
  showUploadFile.value = null
  loadedFile.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>

<template>
  <div class="chat-view-wrapper">
    <div class="chat-view container">
      <div @click="router.back()" class="chat-view__back">
        <img class="arrow" src="/icons/arrow-back-40.svg" alt="arrow" />
        <p class="title">Назад</p>
      </div>
      <h1 class="chat-view__title">
        {{ chatType === 'chat' ? 'Чат' : 'Тех поддержка' }}
      </h1>
      <div class="chat-view__content">
        <div v-if="chatType === 'support'" class="chat-view__content--list">
          <div class="header">
            <div class="chat-title">
              <p class="title">Чаты</p>
              <img
                class="arrow black-fill"
                width="16"
                src="/icons/arrow-select-27.svg"
                alt="arrow"
              />
            </div>
            <span class="count">12</span>
          </div>
          <div class="history">
            <div class="search">
              <input class="input" type="text" placeholder="Найти" />
              <img class="icon" width="14" height="14" src="/icons/search.svg" alt="search" />
            </div>
            <div class="list">
              <div
                @click="setChatId(index)"
                v-for="(i, index) in 3"
                :key="index"
                class="list__item"
              >
                <img class="list__item--avatar" src="/images/banner.png" alt="avatar" />
                <div class="list__item--info">
                  <div class="name-time">
                    <p class="name">Иван Иванов</p>
                    <p class="time">12:00</p>
                  </div>
                  <p class="last-message">Хорошо жду тогда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-view__content--chat">
          <div class="header">
            <img class="avatar" src="/images/banner.png" alt="avatar" />
            <div class="info">
              <p class="name">Иван Иванов</p>
              <div class="status">
                <span class="online" :class="{ offline: !isOnline }"></span>
                <p class="text">{{ !isOnline ? 'Не в сети' : 'В сети' }}</p>
              </div>
            </div>
          </div>
          <div class="chat">
            <div class="their">
              <img class="avatar" src="/images/banner.png" alt="avatar" />
              <div class="their__list">
                <p v-for="i in 6" :key="i" class="their__list--item">omg, this is amazing</p>
              </div>
            </div>
            <div class="my">
              <div class="my__list">
                <p v-for="i in 6" :key="i" class="my__list--item">omg, this is amazing</p>
              </div>
              <img class="avatar" src="/images/banner.png" alt="avatar" />
            </div>
          </div>
          <form @submit.prevent="sendMessage" class="message">
            <div v-if="showUploadFile" class="uploaded-file">
              <img class="image" :src="showUploadFile" alt="file" />
              <img
                @click="deleteFile"
                class="delete"
                width="16"
                height="16"
                src="/icons/delete-v2.svg"
                alt="delete"
              />
            </div>
            <img
              v-else
              class="upload-file"
              src="/icons/attach-file.svg"
              alt="attach"
              @click="triggerUploadAvatar"
            />
            <input
              @change="uploadFile"
              class="input-file"
              type="file"
              style="display: none"
              ref="fileInput"
              accept="image/*"
            />
            <div class="input-message">
              <input v-model="message" class="input" placeholder="Напишите сообщение" type="text" />
              <button class="submit" type="submit">
                <img src="/icons/submit-message.svg" alt="submit" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat-view-wrapper {
  margin-top: 5px;
  background: #f9f9f9;
}
.chat-view {
  display: flex;
  flex-direction: column;
  padding-top: 38px;
  padding-bottom: 40vh;
  &__back {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    .title {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px;
    }
  }
  &__title {
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 24px;
    margin-bottom: 20px;
  }
  &__content {
    display: flex;
    background: #fff;
    &--list {
      display: flex;
      flex-direction: column;
      border-right: 1px solid #e0e0e0;
      min-width: 349px;
      padding-bottom: 20vh;
      .header {
        display: flex;
        align-items: center;
        padding-left: 24px;
        gap: 10px;
        height: 78px;
        border-bottom: 1px solid #e0e0e0;
        .chat-title {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          .title {
            color: #000;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
          }
        }
        .count {
          color: #000;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          border-radius: 24px;
          background: #edf2f7;
          padding: 2px 8px;
        }
      }
      .history {
        display: flex;
        flex-direction: column;
        .search {
          position: relative;
          margin: 12px 24px;
          .input {
            width: 100%;
            padding: 10px 44px;
            border-radius: 12px;
            background: #f3f3f3;
            border: 1px solid #f3f3f3;
            color: #000;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            &::placeholder {
              color: #64748b;
            }
          }
          .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
          }
        }
        .list {
          margin: 0 16px;
          &__item {
            display: flex;
            gap: 16px;
            padding: 12px;
            border-radius: 12px;
            cursor: pointer;
            &:hover {
              background: rgba(97, 94, 240, 0.06);
            }
            &--avatar {
              width: 48px;
              height: 48px;
              border-radius: 12px;
              object-fit: cover;
            }
            &--info {
              width: 100%;
              display: flex;
              flex-direction: column;
              .name-time {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 24px;
                .name {
                  color: #000;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%;
                }
                .time {
                  color: #000;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%;
                  opacity: 0.3;
                }
              }
              .last-message {
                color: rgba(0, 0, 0, 0.4);
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
              }
            }
          }
        }
      }
    }
    &--chat {
      width: 100%;
      display: flex;
      flex-direction: column;
      .header {
        display: flex;
        align-items: center;
        gap: 16px;
        height: 78px;
        padding-left: 24px;
        border-bottom: 1px solid #e0e0e0;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          object-fit: cover;
        }
        .info {
          display: flex;
          flex-direction: column;
          .name {
            color: #000;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
          }
          .status {
            display: flex;
            align-items: center;
            gap: 8px;
            .online {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background: #68d391;
            }
            .text {
              color: #000;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              opacity: 0.6;
            }
            .offline {
              background: #f44336;
            }
          }
        }
      }
      .chat {
        display: flex;
        flex-direction: column;
        padding: 24px;
        overflow-y: scroll;
        height: 500px;
        &::-webkit-scrollbar {
          width: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background: #c4c4c4;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        &::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
        .their {
          display: flex;
          gap: 16px;
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            object-fit: cover;
          }
          &__list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            &--item {
              padding: 8px 16px;
              color: #000;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              border-radius: 12px;
              background: #f1f1f1;
            }
          }
        }
        .my {
          display: flex;
          gap: 16px;
          margin-left: auto;
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            object-fit: cover;
          }
          &__list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            &--item {
              padding: 8px 16px;
              color: #fff;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
              border-radius: 12px;
              background: #3c9462;
            }
          }
        }
      }
      .message {
        display: flex;
        align-items: center;
        padding: 24px;
        gap: 24px;
        .uploaded-file {
          position: relative;
          .image {
            width: 50px;
            height: 50px;
            border-radius: 8px;
            object-fit: cover;
          }
          .delete {
            position: absolute;
            top: -25px;
            right: 15px;
            cursor: pointer;
          }
        }
        .upload-file {
          cursor: pointer;
        }
        .input-message {
          width: 100%;
          position: relative;
          .input {
            width: 100%;
            color: #000;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            border-radius: 12px;
            border: 2px solid #e2e8f0;
            background: #fff;
            padding: 11px 50px 11px 20px;
            &::placeholder {
              color: #000;
              opacity: 0.4;
            }
            &:focus {
              border: 2px solid #68d391 !important;
            }
          }
          .submit {
            position: absolute;
            top: 50%;
            right: 24px;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
</style>
